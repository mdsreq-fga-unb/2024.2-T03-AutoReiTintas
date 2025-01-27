import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProdutos, removeProduto, getCategorias } from "../services/api";
import ProdutoForm from "./ProdutoForm"; 
import { ProdutoResponse } from '../types/produtos';

const EstoquePage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<ProdutoResponse | null>(null);
  const [categorias, setCategorias] = useState<{ id: number, nome: string }[]>([]);

  const fetchProdutos = async () => {
    const produtosData = await getProdutos();
    setProdutos(produtosData);
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  useEffect(() => {
    const fetchCategorias = async () => {
      const categoriasData = await getCategorias();
      setCategorias(categoriasData);
    };

    fetchCategorias();
  }, []);

  const handleAddProduto = () => {
    setProdutoEditando(null);
    setOpenForm(true);
  };

  const handleEditProduto = (produto: ProdutoResponse) => {
    setProdutoEditando(produto);
    setOpenForm(true);
  };

  const handleDeleteProduto = async (id: number) => {
    await removeProduto(id);
    setProdutos(produtos.filter(produto => produto.id !== id));
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  return (
    <div>
      <h1>Estoque</h1>
      <Button variant="contained" color="primary" onClick={handleAddProduto}>
        Adicionar Produto
      </Button>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.descricao}</TableCell>
                <TableCell>{produto.preco}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEditProduto(produto)} variant="contained" color="primary">
                    Editar
                  </Button>
                  <Button onClick={() => handleDeleteProduto(produto.id)} variant="contained" color="secondary">
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {openForm && (
        <ProdutoForm
          produto={produtoEditando}
          categorias={categorias}
          onClose={handleCloseForm}
          onProdutoAddedOrUpdated={() => {
            setOpenForm(false);
            setProdutos([]);
            fetchProdutos();
          }}
        />
      )}
    </div>
  );
};

export default EstoquePage;
