import "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Header from "../components/Header";
import "../styles/app.css";

const HomePage = () => {
  const { user, logout } = useAuth();

  const handleClickLogout = () => logout();
  return (
    <>
      <h1>RecetAPI</h1>
      <Header />
      {user ? (
        <>
        <h2>¡Hola, {user.name}!</h2>
          <li>
            <Link to="/recipes">Mis recetas</Link>
          </li>
          <li>
            <Link to="/form">Agrega una receta</Link>
          </li>

          <button onClick={handleClickLogout}>Salir</button>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/signup">Registro</Link>
          </li>
        </>
      )}
    </>
  );
};

export default HomePage;
