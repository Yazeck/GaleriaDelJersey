import React from "react";
import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Bienvenido a La Galería del Jersey</h1>
      <p>Inicia sesión para continuar</p>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
