import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Delete, AdminPanelSettings } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { getUsuarios, deletarUsuario, tornarAdmin } from '../services/api';
import "../styles/minhaContaStyle.css";

const AdministrarContasPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  const carregarUsuarios = async () => {
    try {
      const dadosUsuarios = await getUsuarios();
      setUsuarios(dadosUsuarios);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
      alert('Erro ao carregar usuários');
    }
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const confirmacao = window.confirm('Tem certeza que deseja excluir este usuário?');
      if (!confirmacao) return;

      const sucesso = await deletarUsuario(id);
      
      if (sucesso) {
        await carregarUsuarios(); 
        alert('Usuário excluído com sucesso!');
      }
    } catch (error) {
      alert(error.message || 'Erro ao excluir usuário');
    }
  };

  const handleMakeAdmin = async (id: number) => {
    try {
      await tornarAdmin(id);
      alert('Usuário agora é administrador!');
    } catch (error) {
      console.error("Erro ao tornar usuário admin:", error);
    }
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'nome', headerName: 'Nome', width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'telefone', headerName: 'Telefone', width: 150 },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Ações',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<AdminPanelSettings />}
          label="Tornar Admin"
          onClick={() => handleMakeAdmin(params.id as number)}
        />,
        <GridActionsCellItem
          icon={<Delete />}
          label="Deletar"
          onClick={() => handleDelete(params.id as number)}
        />,
      ],
    },
  ];

  return (
    <Box sx={{ height: 400, width: '100%', p: 2 }}>
      <Typography variant="h4" gutterBottom className='titulo-pagina'>
        Administrar Contas
      </Typography>
      <DataGrid
        rows={usuarios}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
};

export default AdministrarContasPage;