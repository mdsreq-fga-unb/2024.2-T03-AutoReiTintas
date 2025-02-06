import React, { useEffect, useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProdutos, removeProduto, getCategorias, updateEstoqueProduto, getCategoriaProduto, getEstoqueProduto } from "../services/api"; // Importar funções da API
import ProdutoForm from "./ProdutoForm";
import { ProdutoResponse } from '../types/produtos';

const EstoquePage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<ProdutoResponse | null>(null);
  const [categorias, setCategorias] = useState<{ id: number, nome: string }[]>([]);

  const fetchProdutos = async () => {
    try {
      const produtosData = await getProdutos();
      console.log("Produtos recebidos:", produtosData);

      const produtosFormatados = await Promise.all(produtosData.map(async (produto) => {
 
        const categorias = await getCategoriaProduto(produto.id);
        console.log("Categorias para produto:", produto.id, categorias);

        // Verifique se categorias é um objeto e extraia o nome
        const categoriaNomes = categorias ? [categorias.categoria_nome] : [];

        const estoque = await getEstoqueProduto(produto.id);
        console.log("Estoque para produto:", produto.id, estoque);

        const quantidadeEstoque = estoque?.quantidade_atual || 0; 

        return {
          ...produto,
          imagens: produto.imagens.map((img) => ({
            id: img.id,
            url_imagem: img.url_imagem,
            ordem: img.ordem
          })),
          quantidade_estoque: quantidadeEstoque,
          categorias: categoriaNomes, 
        };
      }));

      setProdutos(produtosFormatados);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  const fetchCategorias = async () => {
    try {
      const categoriasData = await getCategorias();
      console.log("Categorias recebidas: ", categoriasData);
      setCategorias(categoriasData);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
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
      setProdutos((prevProdutos) => prevProdutos.filter(produto => produto.id !== id)); // Remover produto da lista
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleUpdateEstoque = async (produtoId: number, novaQuantidade: number) => {
    try {
      await updateEstoqueProduto(produtoId, novaQuantidade);
      setProdutos(prev => prev.map(p =>
        p.id === produtoId ? { ...p, quantidade_estoque: novaQuantidade } : p
      ));
    } catch (error) {
      console.error("Erro ao atualizar estoque:", error);
    }
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
            {produtos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">Nenhum produto encontrado</TableCell>
              </TableRow>
            ) : (
              produtos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>
                    {produto.imagens.length > 0 ? (
                      <img src={produto.imagens[0].url_imagem} alt={produto.nome} style={{ width: "50px", height: "50px" }} />
                    ) : (
                      "Sem imagem"
                    )}
                  </TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.descricao}</TableCell>
                  <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
                  <TableCell>{produto.quantidade_estoque !== undefined ? produto.quantidade_estoque : "Sem estoque"}</TableCell>
                  <TableCell>
                    {produto.categorias.length > 0 ? (
                      produto.categorias.map((categoria, index) => (
                        <div key={`${produto.id}-categoria-${index}`}>
                          {typeof categoria === "object" ? categoria.nome : categoria}
                        </div>
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
              ))
            )}
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
