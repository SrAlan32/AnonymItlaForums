import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        AnonymItla Forums
      </Link>
      <div className="navbar-links">
        {currentUser ? (
          <>
            <span className="user-email">{currentUser.email}</span>
            <button onClick={handleLogout} className="btn btn-logout">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="nav-link">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
