import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { getUsuarioAtual, atualizarUsuario } from '../services/api';
import "../styles/minhaContaStyle.css";
import SideBar from '../components/SideBar';

const MinhaContaPage = () => {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: ''  
  });

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const dadosUsuario = await getUsuarioAtual();
        setUsuario({ ...dadosUsuario, senha: '' });
      } catch (error) {
        console.error("Erro ao carregar dados do usuário:", error);
      }
    };

    carregarUsuario();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await atualizarUsuario(usuario.id, usuario);
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  return (
    <div className='container-minha-conta'>
      <SideBar></SideBar>
      <Box className='box-minha-conta'>
        <Typography variant="h4" gutterBottom className='a'>
          Minha Conta
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            fullWidth
            margin="normal"
            value={usuario.nome}
            onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
          />
          
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
          />
          
          <TextField
            label="Telefone"
            fullWidth
            margin="normal"
            value={usuario.telefone}
            onChange={(e) => setUsuario({ ...usuario, telefone: e.target.value })}
          />

          <TextField
            label="Nova Senha"
            type="password"
            fullWidth
            margin="normal"
            value={usuario.senha}
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
            helperText="Preencha para alterar a senha. Deixe em branco para manter a atual."
          />
          
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            sx={{ mt: 2 }}
          >
            Salvar Alterações
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default MinhaContaPage;
