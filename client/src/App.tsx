import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import React from "react";
import Dashboard from "./pages/Dashboard";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";



function AuthCallback() {
  return (
    <div>
      <h1>Auth Callback</h1>
      <p>Processing authentication...</p>
    </div>
  );  
}


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
