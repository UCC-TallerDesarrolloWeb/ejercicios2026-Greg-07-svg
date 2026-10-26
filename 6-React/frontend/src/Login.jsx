import { useState } from "react";
import "../src/styles/Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userName == "admin" && password == "admin") {
      console.log("correcto");
      localStorage.setItem("isLoggedIn", "True");
      navigate("/actividades");
    } else {
      console.log("incorrecto");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar Sesion</h2>

        <label htmlFor="username">nombre</label>
        <input
          type="text"
          id="username"
          placeholder="usuario"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />

        <label htmlFor="password"> contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={(f) => setPassword(f.target.value)}
          value={password}
        />

        <button type="submit">ingresar</button>
      </form>
    </div>
  );
};

export default Login;
