import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import CreatePost from "./CreatePost";
import { useAuth } from "../context/AuthContext";

export default function Wall() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  async function fetchPosts() {
    setLoading(true);
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const postsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setPosts(postsData);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function formatDate(timestamp) {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="wall-container">
      <h2>Foros de AnonymItla</h2>

      {currentUser && <CreatePost onPostCreated={fetchPosts} />}

      {loading ? (
        <p className="loading">Cargando publicaciones...</p>
      ) : posts.length === 0 ? (
        <p className="no-posts">No hay publicaciones aún. Sé el primero en publicar.</p>
      ) : (
        <div className="posts-list">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-content">{post.content}</p>
              <div className="post-meta">
                <span className="post-author">{post.authorEmail}</span>
                <span className="post-date">{formatDate(post.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
