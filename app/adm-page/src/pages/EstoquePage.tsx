import React, { useEffect, useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getProdutos,
  removeProduto,
  getCategorias,
  updateEstoqueProduto,
  addCategoria,
} from "../services/api";
import ProdutoForm from "../components/ProdutoForm";
import { ProdutoResponse } from "../types/produtos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const EstoquePage = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<ProdutoResponse[]>([]);
  const [openForm, setOpenForm] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState<ProdutoResponse | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const [categorias, setCategorias] = useState<{ id: number; nome: string }[]>([]);
  const [openCategoriaDialog, setOpenCategoriaDialog] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState<string>("");

  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [produtoToDelete, setProdutoToDelete] = useState<ProdutoResponse | null>(null);

  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const fetchProdutos = async () => {
    try {
      const { data, total } = await getProdutos({
        page: page + 1,
        pageSize: rowsPerPage,
        search: debouncedSearchTerm,
        categoryId: selectedCategory,
      });
      setProdutos(data);
      setTotalCount(total);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProdutos([]);
      setTotalCount(0);
    }
  };

  const fetchCategorias = async () => {
    try {
      const categoriasData = await getCategorias();
      setCategorias(categoriasData);
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, [page, rowsPerPage, debouncedSearchTerm, selectedCategory]);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
        await fetchProdutos();
        setOpenDeleteDialog(false);
        setProdutoToDelete(null);
      } catch (error) {
        console.error("Erro ao remover produto:", error);
      }
    }
  };

  const handleUpdateEstoque = async (produtoId: number, novaQuantidade: number) => {
    try {
      await updateEstoqueProduto(produtoId, novaQuantidade);
      setProdutos((prev) =>
        prev.map((p) =>
          p.id === produtoId ? { ...p, quantidade_estoque: novaQuantidade } : p
        )
      );
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

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setOpenImageDialog(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Estoque</h1>

      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <Button variant="contained" color="primary" onClick={handleAddProduto}>
          Adicionar Produto
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpenCategoriaDialog(true)}
        >
          Adicionar Categoria
        </Button>

        <TextField
          label="Buscar Produto"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ minWidth: "250px" }}
        />

        <FormControl style={{ minWidth: "200px" }}>
          <InputLabel>Filtrar por Categoria</InputLabel>
          <Select
            value={selectedCategory}
            label="Filtrar por Categoria"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">Todas as Categorias</MenuItem>
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Imagens</TableCell>
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
            {produtos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  Nenhum produto encontrado
                </TableCell>
              </TableRow>
            ) : (
              produtos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>
                    {produto.imagens && produto.imagens.length > 0 ? (
                      <Button variant="outlined" onClick={() => handleImageClick(produto.imagens.map(img => img.url_imagem))}>
                        Ver Imagens
                      </Button>
                    ) : (
                      "Sem imagem"
                    )}
                  </TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.codigo ?? "N/A"}</TableCell>
                  <TableCell>{produto.descricao}</TableCell>
                  <TableCell>R$ {produto.preco?.toFixed(2)}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={produto.quantidade_estoque || 0}
                      onChange={(e) =>
                        handleUpdateEstoque(produto.id, parseInt(e.target.value))
                      }
                      inputProps={{ min: 0 }}
                      variant="standard"
                    />
                  </TableCell>
                  <TableCell>
                    {produto.categorias
                      ?.map((categoria) => categoria.nome)
                      .join(", ") || "Sem categoria"}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleEditProduto(produto)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => promptDeleteProduto(produto)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={totalCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Itens por página:"
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        />
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

      <Dialog open={openImageDialog} onClose={() => setOpenImageDialog(false)}>
        <DialogTitle>Imagens do Produto</DialogTitle>
        <DialogContent>
          {selectedImages.map((img, index) => (
            <a key={index} href={img} target="_blank" rel="noopener noreferrer">
              <IconButton>
                <ImageIcon />
              </IconButton>
            </a>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenImageDialog(false)} color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      {openForm && (
        <ProdutoForm
          produto={produtoEditando}
          categorias={categorias}
          onClose={() => setOpenForm(false)}
          onProdutoAddedOrUpdated={fetchProdutos}
        />
      )}
    </div>
  );
};

export default EstoquePage;