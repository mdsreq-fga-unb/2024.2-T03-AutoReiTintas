import React, { useState, useEffect } from 'react';
import { getUsuarios, loginUsuario } from '../services/api';
import UserList from './UserList/UserList';

const AdminPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [loading, setLoading] = useState(false);  
  useEffect(() => {
    if (token) {
      fetchUsuarios();
    }
  }, [token]);

  const fetchUsuarios = async () => {
    try {
      setLoading(true); 
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      alert('Erro ao carregar usuários. Tente novamente mais tarde.');
    } finally {
      setLoading(false);  
    }
  };

  const handleLogin = async () => {
    try {
      setLoading(true);  
      const data = await loginUsuario(email, senha);
      setToken(data.token);
      localStorage.setItem('token', data.token); 
    } catch (error) {
      alert('Email ou senha inválidos');
    } finally {
      setLoading(false);  
    }
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  if (!token) {
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
        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Carregando...' : 'Entrar'}
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Página de Administração</h1>
      <button onClick={handleLogout}>
        Sair
      </button>
      {loading ? (
        <p>Carregando usuários...</p>
      ) : (
        <UserList usuarios={usuarios} />
      )}
    </div>
  );
};

export default AdminPage;
