import React, { useEffect, useState } from "react";
import {
  Button, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, FormControl, InputLabel, Select, MenuItem, IconButton
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getProdutos, removeProduto, getCategorias, updateEstoqueProduto,
  getCategoriaProduto, getEstoqueProduto, addCategoria
} from "../services/api";
import ProdutoForm from "../components/ProdutoForm";
import { ProdutoResponse } from "../types/produtos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const EstoquePage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<ProdutoResponse | null>(null);

  const [categorias, setCategorias] = useState<{ id: number, nome: string }[]>([]);
  const [openCategoriaDialog, setOpenCategoriaDialog] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState<string>('');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [produtoToDelete, setProdutoToDelete] = useState<ProdutoResponse | null>(null);

  const fetchProdutos = async () => {
    try {
      const produtosData = await getProdutos();
      console.log("Produtos recebidos:", produtosData);

      const produtosFormatados = await Promise.all(produtosData.map(async (produto) => {
        const catData = await getCategoriaProduto(produto.id);
        const categoriaNomes = catData ? [catData.categoria_nome] : [];
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
      console.log("Categorias recebidas:", categoriasData);
      setCategorias(categoriasData);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  const handleAddProduto = () => {
    setProdutoEditando(null);
    setOpenForm(true);
  };

  const handleEditProduto = (produto: ProdutoResponse) => {
    setProdutoEditando(produto);
    setOpenForm(true);
  };

  const promptDeleteProduto = (produto: ProdutoResponse) => {
    setProdutoToDelete(produto);
    setOpenDeleteDialog(true);
  };

  const confirmDeleteProduto = async () => {
    if (produtoToDelete) {
      try {
        await removeProduto(produtoToDelete.id);
        setProdutos((prevProdutos) =>
          prevProdutos.filter((produto) => produto.id !== produtoToDelete.id)
        );
        setOpenDeleteDialog(false);
        setProdutoToDelete(null);
      } catch (error) {
        console.error("Erro ao remover produto:", error);
      }
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

  const handleAddCategoria = async () => {
    try {
      if (novaCategoria.trim() === "") return;
      await addCategoria({ nome: novaCategoria });
      setNovaCategoria("");
      setOpenCategoriaDialog(false);
      fetchCategorias();
    } catch (error) {
      console.error("Erro ao adicionar categoria:", error);
    }
  };

  useEffect(() => {
    fetchProdutos();
    fetchCategorias();
  }, []);

  const filteredProdutos = produtos.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCategory !== "") {
      const selectedCat = categorias.find(c => c.id === selectedCategory);
      if (!selectedCat) return false;
      return matchesSearch && produto.categorias.includes(selectedCat.nome);
    }
    return matchesSearch;
  });

  return (
    <div>
      <h1>Estoque</h1>
      <Button variant="contained" color="primary" onClick={handleAddProduto}>
        Adicionar Produto
      </Button>
      <Button variant="contained" color="primary" onClick={() => setOpenCategoriaDialog(true)}>
        Adicionar Categoria
      </Button>

      <TextField
        label="Buscar Produto"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Filtrar por Categoria</InputLabel>
        <Select
          value={selectedCategory}
          label="Filtrar por Categoria"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">Todas as Categorias</MenuItem>
          {categorias.map(categoria => (
            <MenuItem key={categoria.id} value={categoria.id}>
              {categoria.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Imagem</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Cód. Produto</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell>Estoque</TableCell>
              <TableCell>Categorias</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProdutos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">Nenhum produto encontrado</TableCell>
              </TableRow>
            ) : (
              filteredProdutos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>
                    {produto.imagens.length > 0 ? (
                      <img
                        src={produto.imagens[0].url_imagem}
                        alt={produto.nome}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ) : (
                      "Sem imagem"
                    )}
                  </TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.codigo ?? "Sem código"}</TableCell> {/* Aqui está a renderização do código do produto */}
                  <TableCell>{produto.descricao}</TableCell>
                  <TableCell>R$ {produto.preco.toFixed(2)}</TableCell>
                  <TableCell>{produto.quantidade_estoque !== undefined ? produto.quantidade_estoque : "Sem estoque"}</TableCell>
                  <TableCell>
                    {produto.categorias.length > 0 ? (
                      produto.categorias.map((categoria, index) => (
                        <div key={`${produto.id}-categoria-${index}`}>
                          {categoria}
                        </div>
                      ))
                    ) : (
                      <p>Sem categoria</p>
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEditProduto(produto)} aria-label="editar">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="secondary"
                      onClick={() => promptDeleteProduto(produto)}
                      aria-label="excluir"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>

        </Table>
      </TableContainer>

      <Dialog open={openDeleteDialog} onClose={() => setOpenDeleteDialog(false)}>
        <DialogTitle>Confirmar Exclusão</DialogTitle>
        <DialogContent>
          Tem certeza que deseja excluir este produto?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteDialog(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={confirmDeleteProduto} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

      {openCategoriaDialog && (
        <Dialog open={openCategoriaDialog} onClose={() => setOpenCategoriaDialog(false)}>
          <DialogTitle>Adicionar Nova Categoria</DialogTitle>
          <DialogContent>
            <TextField
              label="Nome da Categoria"
              value={novaCategoria}
              onChange={(e) => setNovaCategoria(e.target.value)}
              fullWidth
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenCategoriaDialog(false)} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleAddCategoria} color="primary">
              Adicionar
            </Button>
          </DialogActions>
        </Dialog>
      )}

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
