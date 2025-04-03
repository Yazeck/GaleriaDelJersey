import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ name, email }));
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <p>Autenticando usuario...</p>;
};

export default AuthCallback;
