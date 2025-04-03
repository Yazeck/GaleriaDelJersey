import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import logo from "../assets/logo-equipo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      console.log("✅ Login exitoso:", res.data);
    } catch (err) {
      setError("Credenciales inválidas");
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
      <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">
          Bienvenido a{" "}
          <span role="img" aria-label="balón">
            ⚽
          </span>{" "}
          La Galería del Jersey
        </h1>
        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            required
            
          />
          <input
            type="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />
          <button type="submit" className="login-btn">
            Iniciar sesión
          </button>
        </form>

        <p style={{ fontWeight: "bold", color: "#444" }}>o accede con Google</p>
        <button
          onClick={() =>
            (window.location.href = "http://localhost:5001/api/auth/google")
          }
          className="login-btn login-btn-google"
        >
          <span role="img" aria-label="google logo">🔴</span> Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;