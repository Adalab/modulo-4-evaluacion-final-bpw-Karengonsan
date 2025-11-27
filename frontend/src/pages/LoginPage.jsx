import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { loginUser } from "../services/api";
import "../styles/app.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { saveUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleChangeShowPassword = () => setShowPassword(!showPassword);

  const getIsEmailValid = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!getIsEmailValid(email)) {
      return setError("Introduce un correo electrónico válido.");
    }

    loginUser(email, password).then((data) => {
               
        if (!data || !data.token) {
            setError("Credenciales incorrectas");
            return;
        }
      localStorage.setItem("token", data.token);
      saveUser(data);
      navigate("/");
    });
  };

  return (
    <>
      <div className="login">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className="login">
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          value={password}
          onChange={handleChangePassword}
        />

        <button onClick={handleChangeShowPassword}>
          {showPassword ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      {error && <div>{error}</div>}

      <button onClick={handleSubmit}>Entrar</button>

      <div>
        <p>¿No tienes cuenta?</p>
        <Link to="/signup">Regístrate</Link>
      </div>
    </>
  );
};

export default LoginPage;
