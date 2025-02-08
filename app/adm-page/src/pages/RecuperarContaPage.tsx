import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendRecoveryEmail } from '../services/api';
import '../styles/recuperarConta.css';

const RecuperarContaPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendRecoveryEmail(email);
      setMessage('Um email foi enviado com as instruções para redefinir sua senha.');
    } catch (error) {
      setMessage('Erro ao enviar email. Verifique o email informado e tente novamente.');
    }
  };

  return (
    <div className="recuperar-body">
      <div className="recuperar-container">
        <h1 className="recuperar-title">Recuperação de Conta</h1>
        <form className="recuperar-form" onSubmit={handleRecovery}>
          <input
            className="recuperar-input"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="recuperar-button">
            Recuperar Senha
          </button>
        </form>
        {message && <p className="recuperar-message">{message}</p>}
        <button onClick={() => navigate('/')} className="recuperar-back-button">
          Voltar para Login
        </button>
      </div>
    </div>
  );
};

export default RecuperarContaPage;
