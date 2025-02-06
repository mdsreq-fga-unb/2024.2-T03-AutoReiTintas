import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProdutos, removeProduto, getCategorias, updateEstoqueProduto } from "../services/api"; // Certifique-se de importar a função de atualização de estoque
import ProdutoForm from "./ProdutoForm";
import { ProdutoResponse } from '../types/produtos';

const EstoquePage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<ProdutoResponse | null>(null);
  const [categorias, setCategorias] = useState<{ id: number, nome: string }[]>([]);

  // Função para buscar os produtos do estoque
  const fetchProdutos = async () => {
    try {
      const produtosData = await getProdutos();

      console.log("Produtos recebidos:", produtosData); // Debug para ver o retorno da API

      const produtosFormatados = produtosData.map((produto: any) => ({
        ...produto,
        imagens: produto.imagens.map((img: any) => ({
          id: img.id,
          url_imagem: img.url_imagem,
          ordem: img.ordem
        })),
        quantidade_estoque: produto.quantidade_estoque || 0, // Garantindo que não seja undefined
        categorias: produto.categorias || [] // Garantindo que não seja undefined
      }));

      console.log("Produtos formatados:", produtosFormatados); // Debug para ver os dados finais

      setProdutos(produtosFormatados);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };



  // Função para buscar as categorias
  const fetchCategorias = async () => {
    const categoriasData = await getCategorias();
    setCategorias(categoriasData);
  };

  useEffect(() => {
    fetchProdutos();
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
    try {
      await removeProduto(id);
      setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id));
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
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
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Estoque</TableCell>
              <TableCell>Categorias</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>{produto.id}</TableCell>
                <TableCell>
                  {produto.imagens.length > 0 ? (
                    <img src={produto.imagens[0]} alt={produto.nome} style={{ width: "50px", height: "50px" }} />
                  ) : (
                    "Sem imagem"
                  )}
                </TableCell>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.descricao}</TableCell>
                <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
                <TableCell>{produto.quantidade_estoque}</TableCell>
                <TableCell>{produto.quantidade_estoque ?? "N/A"}</TableCell>
                <TableCell>
                  {produto.categorias.length > 0 ? (
                    produto.categorias.map((categoria: any) => (
                      <div key={categoria.id}>{categoria.nome}</div>
                    ))
                  ) : (
                    <p>Sem categoria</p>
                  )}
                </TableCell>
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
            fetchProdutos();
          }}
        />
      )}
    </div>
  );
};

export default EstoquePage;
