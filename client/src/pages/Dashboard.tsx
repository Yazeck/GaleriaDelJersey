

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Puedes usar los mismos estilos

type DecodedToken = {
  id: string;
  role: string;
  iat: number;
  exp: number;
};

const Dashboard = () => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode<DecodedToken>(token);
      setUser(decoded);
    } catch (error) {
      console.error("Token inválido");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h1>Dashboard</h1>
        {user ? (
          <>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Rol:</strong> {user.role}</p>
            <button className="login-btn" onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <p>Cargando usuario...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
