import React, { useState } from "react";
import "../styles/registerStyle.css";
import Header from "../components/header";
import Footer from '../components/footer';
import { registerUser } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,11}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Email inválido");
      return;
    }
    if (formData.senha.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres");
      return;
    }
    if (!validatePhone(formData.telefone)) {
      setError("Telefone inválido");
      return;
    }
    try {
      const userData = await registerUser(formData);
      login(userData);
      setSuccess("Usuário registrado com sucesso!");
      navigate("/account");
    } catch (err) {
      setError("Erro ao registrar usuário. Tente novamente.");
      setSuccess("");
    }
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="heading">Cadastro</div>
          <form onSubmit={handleSubmit} className="form">
            <input
              required
              className="input"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              required
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="password-container">
              <input
                required
                className="input"
                type={showPassword ? "text" : "password"}
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Esconder" : "Mostrar"}
              </button>
            </div>
            <input
              required
              className="input"
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
            />
            <input className="login-button" type="submit" value="Sign Up" />
          </form>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;