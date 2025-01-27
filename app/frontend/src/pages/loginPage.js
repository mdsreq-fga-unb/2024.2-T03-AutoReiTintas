import React, { useState } from "react";
import "../styles/loginStyle.css";
import Header from "../components/header.js";
import { loginUsuario } from "../services/api.js"; 

const LoginPage = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const userData = { email, password }; 

    try {
      const response = await loginUsuario(email, password);
      console.log("Login successful", response); 

      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("usuario_id", response.usuario_id);

      setError(""); 
     
      window.location.href = "/dashboard";

    } catch (err) {
      setError("Erro ao fazer login: " + (err.response?.data?.detail || err.message || "Algo deu errado!"));
    }
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="heading">Login</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            {error && <div className="error-message">{error}</div>} 
            <span className="forgot-password">
              <a href="#">Forgot Password?</a>
            </span>
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          <span className="agreement">
            <a href="">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
