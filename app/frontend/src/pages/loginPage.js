import React, { useState } from "react";
import "../styles/loginStyle.css";
import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { loginUsuario } from "../services/api";
import Footer from '../components/footer';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUsuario(formData.email, formData.password);
      login(userData);
      navigate("/account");
    } catch (err) {
      setError("Falha no login. Verifique suas credenciais e tente novamente.");
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
              value={formData.email}
              onChange={handleChange}
            />
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="forgot-password">
              <a href="#">Esqueceu a senha?</a>
            </span>
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          {error && <div className="error-message">{error}</div>}
          <div className="register-container">
            <span>Não tem uma conta?</span>
            <Link to="/cadastro" className="register-link">Cadastre-se</Link>
          </div>
          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;