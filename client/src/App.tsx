import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import AuthCallback from "./pages/AuthCallback"; 






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />

      
      </Routes>
    </Router>
  );
}

export default App;
