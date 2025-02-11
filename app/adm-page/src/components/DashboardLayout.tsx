import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import SideBarState from '../components/SideBarState';
import { getProdutos, getUsuarios } from '../services/api';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [produtosData, usuariosData] = await Promise.all([
          getProdutos(),
          getUsuarios()
        ]);
        setProdutos(produtosData.slice(0, 5)); // Últimos 5 produtos
        setUsuarios(usuariosData.slice(0, 5)); // Últimos 5 usuários
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };
    carregarDados();
  }, []);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      <main style={{ 
        flex: 1, 
        padding: '20px',
        marginLeft: '250px', // Acompanha largura do sidebar
        transition: 'margin 0.3s'
      }}>
        <Typography variant="h4" gutterBottom>
          Dashboard Resumo
        </Typography>

        <Grid container spacing={3}>
          {/* Card de Estoque */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Últimos Produtos
                </Typography>
                {produtos.map((produto) => (
                  <Box key={produto.id} sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    mb: 1,
                    p: 1,
                    bgcolor: '#f5f5f5',
                    borderRadius: 1
                  }}>
                    <Typography>{produto.nome}</Typography>
                    <Typography>Estoque: {produto.quantidade_estoque || 0}</Typography>
                  </Box>
                ))}
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ mt: 2 }}
                  onClick={() => navigate('/estoque')}
                >
                  Ver Estoque Completo
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card de Usuários */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Últimos Usuários
                </Typography>
                {usuarios.map((usuario) => (
                  <Box key={usuario.id} sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    mb: 1,
                    p: 1,
                    bgcolor: '#f5f5f5',
                    borderRadius: 1
                  }}>
                    <Typography>{usuario.nome}</Typography>
                    <Typography>{usuario.email}</Typography>
                  </Box>
                ))}
                <Button 
                  fullWidth 
                  variant="contained" 
                  sx={{ mt: 2 }}
                  onClick={() => navigate('/administrar-contas')}
                >
                  Gerenciar Usuários
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card de Ações Rápidas */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Ações Rápidas
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={3}>
                    <Button 
                      fullWidth 
                      variant="contained" 
                      onClick={() => navigate('/estoque/novo')}
                    >
                      Novo Produto
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Button 
                      fullWidth 
                      variant="contained" 
                      onClick={() => navigate('/administrar-contas/novo')}
                    >
                      Novo Usuário
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default DashboardPage;