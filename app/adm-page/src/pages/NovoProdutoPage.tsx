import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { getCategorias } from '../services/api';
import ProdutoForm from '../components/ProdutoForm';
import { CategoriaResponse } from '../types/produtos';
import { useNavigate } from 'react-router-dom';

const NovoProdutoPage = () => {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<CategoriaResponse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ p: 3 }}>
      <ProdutoForm 
        produto={null} 
        categorias={categorias} 
        onClose={() => navigate('/dashboard/estoque')} 
        onProdutoAddedOrUpdated={() => navigate('/dashboard/estoque')} 
      />
    </Box>
  );
};

export default NovoProdutoPage;
