import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { loginUsuario } from '../services/api';  

const AdminPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginUsuario(email, senha);
      navigate('/estoque');  // Redireciona para a página de estoque
    } catch (error) {
      alert('Email ou senha inválidos');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default AdminPage;
