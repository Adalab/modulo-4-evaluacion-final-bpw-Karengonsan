import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import Header from "../components/Header";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { saveUser } = useAuth();
  const navigate = useNavigate();

  const handleChangeName = (e) => setName(e.target.value);

  const handleChangeEmail = (e) => setEmail(e.target.value);

  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);

  const handleChangeShowPassword = () => setShowPassword(!showPassword);

  const getIsEmailValid = (value) => {
    // Email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!getIsEmailValid(email)) {
      return setError("Introduce un correo electrónico válido.");
    }

    if (password !== confirmPassword) {
      return setError("Las contraseñas no coindiden.");
    }

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name_user: name, email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        // "token" "name" "id"
        localStorage.setItem("token", data.token);
        saveUser(data);
        navigate("/recipes");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <div className="signup">
        <label htmlFor="name">Nombre</label>
        <input id="name" type="name" value={name} onChange={handleChangeName} />
      </div>

      <div className="signup">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>

      <div className="signup">
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

      <div className="signup">
        <label htmlFor="confirmPassword">Repetir contraseña</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
      </div>

      {error && <div>{error}</div>}

      <button onClick={handleSubmit}>Continuar</button>

      <div className="signup">
        <p>Ya tienes cuenta?</p>
        <Link to="/login">Login</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default SignupPage;
