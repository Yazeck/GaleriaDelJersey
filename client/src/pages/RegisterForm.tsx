
import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css"; // Reutilizando estilos

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/auth/register", {
        name,
        username,
        email,
        password,
      });
      setSuccess("Cuenta creada exitosamente 🎉");
      setError("");
    } catch (err) {
      setError("El correo o el usuario ya está registrado.");
      setSuccess("");
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h2 className="login-title">Crear cuenta</h2>

        {error && <p className="login-error">{error}</p>}
        {success && <p style={{ color: "green", fontWeight: "bold" }}>{success}</p>}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="login-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
            required
          />
          <input
            type="text"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nombre de usuario"
            required
          />
          <input
            type="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
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
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
