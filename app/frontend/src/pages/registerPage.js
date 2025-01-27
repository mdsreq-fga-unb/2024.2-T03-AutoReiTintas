import React, { useState } from "react";
import "../styles/registerStyle.css";
import Header from "../components/header.js";
import { registerUser } from "../services/api"; // Importa o serviço de registro

const RegisterPage = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    telefone: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(form); // Usa o serviço de registro
      setMessage("Usuário registrado com sucesso!");
      setForm({
        nome: "",
        email: "",
        senha: "",
        telefone: "",
      });
      console.log(response); // Para depuração
    } catch (error) {
      setMessage(error.response?.data?.detail || "Erro ao registrar.");
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
              value={form.nome}
              onChange={handleChange}
            />
            <input
              required
              className="input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
            />
            <input
              required
              className="input"
              type="password"
              name="senha"
              placeholder="Senha"
              value={form.senha}
              onChange={handleChange}
            />
            <input
              required
              className="input"
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={form.telefone}
              onChange={handleChange}
            />
            <input className="login-button" type="submit" value="Sign Up" />
          </form>
          {message && <p className="message">{message}</p>}
          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
