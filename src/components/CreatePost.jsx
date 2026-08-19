import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";

export default function CreatePost({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        authorEmail: currentUser.email,
        authorUid: currentUser.uid,
        createdAt: serverTimestamp(),
      });
      setTitle("");
      setContent("");
      if (onPostCreated) onPostCreated();
    } catch (err) {
      setError("Error al publicar. Intenta de nuevo.");
    }
    setLoading(false);
  }

  return (
    <div className="create-post-container">
      <h3>Nueva Publicación</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Título de tu publicación"
          />
        </div>
        <div className="form-group">
          <label>Contenido</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            placeholder="¿Qué quieres compartir?"
            rows={4}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Publicando..." : "Publicar"}
        </button>
      </form>
    </div>
  );
}
