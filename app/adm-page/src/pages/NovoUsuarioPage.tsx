import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUsuario } from '../services/api';
import "../styles/minhaContaStyle.css";

const NovoUsuarioPage = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUsuario(usuario);
      alert("Usuário criado com sucesso!");
      navigate('/dashboard/administrar-contas');
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      alert("Erro ao criar usuário. Verifique os dados e tente novamente.");
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom className='titulo-pagina'>
        Novo Usuário
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={usuario.nome}
          onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
        />
        
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={usuario.email}
          onChange={(e) => setUsuario({...usuario, email: e.target.value})}
        />
        
        <TextField
          label="Telefone"
          fullWidth
          margin="normal"
          value={usuario.telefone}
          onChange={(e) => setUsuario({...usuario, telefone: e.target.value})}
        />
        
        <TextField
          label="Senha"
          type="password"
          fullWidth
          margin="normal"
          value={usuario.senha}
          onChange={(e) => setUsuario({...usuario, senha: e.target.value})}
        />
        
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" color="primary">
            Salvar Usuário
          </Button>
          <Button 
            variant="outlined" 
            color="secondary" 
            sx={{ ml: 2 }}
            onClick={() => navigate('/dashboard/administrar-contas')}
          >
            Cancelar
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default NovoUsuarioPage;
