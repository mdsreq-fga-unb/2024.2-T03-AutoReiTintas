import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { loginUsuario, getUsuarioRole } from '../services/api';
import '../styles/loginStyle.css';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const data = await loginUsuario(email, senha);
      const decoded = jwtDecode(data.access_token);
      const usuarioId = decoded.sub;
      const usuarioRole = await getUsuarioRole(usuarioId);

      if (usuarioRole.role_id !== 1) {
        alert('Você não possui permissão para acessar esta página.');
        return;
      }

      localStorage.setItem("access_token", data.access_token);
      navigate("/dashboard");
    } catch (error) {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div className="body">
      <div className="container">
        <h1 className="admin-title">Página do Administrador</h1>
        <div className="heading">Login</div>
        <form className="form" onSubmit={handleLogin}>
          <input
            className="input"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <span className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
        <span className="agreement">
          <a href="">Learn user licence agreement</a>
        </span>
      </div>
    </div>
  );
};

export default AdminPage;
