import React, { useState, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import Header from '../components/header';
import Footer from '../components/footer';
import { getUsuarioAtual, atualizarUsuario } from '../services/api';
import "../styles/accountStyle.css";

const AccountPage = () => {
  const { user, login } = useUser();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '' 
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error("Token não encontrado. Faça login novamente.");
        }

        const userData = await getUsuarioAtual(token);
        setFormData({
          nome: userData.nome,
          email: userData.email,
          telefone: userData.telefone,
          senha: '' 
        });
        login(userData); 
      } catch (err) {
        console.error('Erro ao buscar dados do usuário:', err);
        setError(err.message || 'Erro ao carregar dados do usuário.');
      }
    };

    if (!user) {
      fetchUserData();
    }
  }, [user, login]); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      const updatedUser = await atualizarUsuario(user.id, formData);
      setSuccess('Dados atualizados com sucesso!');
      setIsEditing(false);
      login(updatedUser); 
    } catch (err) {
      setError('Erro ao atualizar dados. Tente novamente.');
    }
  };

  return (
    <div>
      <Header />
      <div className="body">
        <div className="container">
          <div className="heading">Minha Conta</div>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          <div className="account-info">
            <div>
              <label><strong>Nome:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              ) : (
                <p>{formData.nome}</p>
              )}
            </div>
            <div>
              <label><strong>Email:</strong></label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              ) : (
                <p>{formData.email}</p>
              )}
            </div>
            <div>
              <label><strong>Telefone:</strong></label>
              {isEditing ? (
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              ) : (
                <p>{formData.telefone}</p>
              )}
            </div>
            <div>
              <label><strong>Senha:</strong></label>
              {isEditing ? (
                <input
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Nova senha (deixe em branco para manter a atual)"
                />
              ) : (
                <p>******</p> 
              )}
            </div>
            {isEditing ? (
              <button className="button save-button" onClick={handleSave}>Salvar</button>
            ) : (
              <button className="button edit-button" onClick={() => setIsEditing(true)}>Editar</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;