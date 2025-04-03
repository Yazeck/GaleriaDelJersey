import React from "react";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = "http://localhost:5001/api/auth/google";
  };

  return (
    <button
      onClick={handleLogin}
      style={{
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        backgroundColor: "#4285F4",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Iniciar sesión con Google
    </button>
  );
};

export default GoogleLoginButton;
