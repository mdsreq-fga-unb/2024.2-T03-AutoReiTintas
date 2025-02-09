import React, { useEffect, useState } from "react";
import {
  Button, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle,
  TextField, FormControl, InputLabel, Select, MenuItem, IconButton,
  TablePagination
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  getProdutos, removeProduto, getCategorias, updateEstoqueProduto,
  addCategoria
} from "../services/api";
import ProdutoForm from "../components/ProdutoForm";
import { ProdutoResponse } from "../types/produtos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/estoqueStyle.css";

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

  // Estados de paginação
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  const [categorias, setCategorias] = useState<{ id: number, nome: string }[]>([]);
  const [openCategoriaDialog, setOpenCategoriaDialog] = useState(false);
  const [novaCategoria, setNovaCategoria] = useState<string>('');

  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [selectedCategory, setSelectedCategory] = useState<number | "">("");

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [produtoToDelete, setProdutoToDelete] = useState<ProdutoResponse | null>(null);

  const fetchProdutos = async () => {
    try {
      const { data, total } = await getProdutos({
        page: page + 1,
        pageSize: rowsPerPage,
        search: debouncedSearchTerm,
        categoryId: selectedCategory
      });

      console.log("Produtos recebidos:", data);  // Log 

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

  return (
    <div className="estoque-container" >
      <div className="header-h1">
        <h1>Estoque</h1>

      </div>
      
      <div className="header-container" >
        <Button className="botao" variant="contained" onClick={handleAddProduto}>
          Adicionar Produto
        </Button>
        <Button className="botao" variant="contained" onClick={() => setOpenCategoriaDialog(true)}>
          Adicionar Categoria
        </Button>

        <TextField
          label="Buscar Produto"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="textfield"
        />

        <FormControl className="formcontrol" >
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
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className="table-head">
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
            {produtos.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">Nenhum produto encontrado</TableCell>
              </TableRow>
            ) : (
              produtos.map((produto) => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>
                    {produto.imagens?.[0]?.url_imagem ? (
                      <img
                        src={produto.imagens[0].url_imagem}
                        alt={produto.nome}
                        style={{ width: "50px", height: "50px", objectFit: 'cover' }}
                      />
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
                      onChange={(e) => handleUpdateEstoque(produto.id, parseInt(e.target.value))}
                      inputProps={{ min: 0 }}
                      variant="standard"
                    />
                  </TableCell>
                  <TableCell>
                    {produto.categorias?.map(categoria => categoria.nome).join(', ') || "Sem categoria"}
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEditProduto(produto)}>
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