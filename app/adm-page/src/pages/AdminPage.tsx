import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginUsuario } from '../services/api';  
import Header from '../components/Header';
import '../styles/loginStyle.css';

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); 
  
    try {
      const data = await loginUsuario(email, senha);
      localStorage.setItem("access_token", data.access_token); 
      navigate("/dashboard"); 
    } catch (error) {
      alert("Email ou senha inválidos");
    }
  };

  return (
    <div >
      <Header></Header>
      <div className="body">
        <div className="container">
          <div className="heading">Login</div>
          <form action="" className="form">
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
              <a href="#">Esqueceu a senha ?</a>
            </span>
            <input className="login-button" type="submit" value="Sign In" onClick={handleLogin}/>
          </form>
          <span className="agreement">
            <a href="">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
