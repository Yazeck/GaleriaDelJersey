import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      const user: any = jwtDecode(token);
      console.log("Token decodificado:", user);

      navigate("/dashboard", { replace: true }); // 👈 Importante: replace true
    }
  }, [navigate]);

  return (
    <div>
      <h1>Autenticando...</h1>
    </div>
  );
};

export default AuthCallback;
