import React from "react";
import "../styles/loginStyle.css";
import Header from "../components/header.js";
import { Link } from "react-router-dom"; 

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="heading">Login</div>
          <form action="" className="form">
            <input
              required
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              required
              className="input"
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
            />
            <span className="forgot-password">
              <a href="#">Esqueceu a senha?</a>
            </span>
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          <div className="register-container">
            <span>Não tem uma conta?</span>
            <Link to="/cadastro" className="register-link">Cadastre-se</Link>
          </div>
          <span className="agreement">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;