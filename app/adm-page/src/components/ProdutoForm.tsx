import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl, Checkbox, SelectChangeEvent } from "@mui/material";
import { addProduto, updateProduto } from "../services/api";
import { ProdutoCreate } from '../types/produtos';

interface ProdutoFormProps {
  produto: ProdutoCreate | null;
  categorias: { id: number, nome: string }[]; 
  onClose: () => void;
  onProdutoAddedOrUpdated: () => void;
}

const ProdutoForm: React.FC<ProdutoFormProps> = ({ produto, categorias, onClose, onProdutoAddedOrUpdated }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<number[]>([]);

  useEffect(() => {
    if (produto) {
      setNome(produto.nome);
      setDescricao(produto.descricao || "");
      setPreco(produto.preco.toString());
      setCategoriasSelecionadas(produto.categorias ? produto.categorias.map((cat) => cat.categoria_id) : []); // Verificando se há categorias no produto
    }
  }, [produto]);

  const handleSubmit = async () => {
    const produtoData: ProdutoCreate = {
      nome, 
      descricao, 
      preco: Number(preco),
      categorias: categoriasSelecionadas.map((categoria_id) => ({
        produto_id: produto?.id, 
        categoria_id
      }))
    };

    if (produto) {
      await updateProduto(produto.id, produtoData);
    } else {
      await addProduto(produtoData);
    }

    onProdutoAddedOrUpdated();
  };

  const handleChangeCategorias = (event: SelectChangeEvent<number[]>) => {
    setCategoriasSelecionadas(event.target.value as number[]);
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{produto ? "Editar Produto" : "Adicionar Produto"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="Descrição"
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          label="Preço"
          type="number"
          fullWidth
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Selecione as Categorias</InputLabel>
          <Select
            multiple
            value={categoriasSelecionadas}
            onChange={handleChangeCategorias}
            renderValue={(selected) => selected.join(', ')}
          >
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.id}>
                <Checkbox checked={categoriasSelecionadas.indexOf(categoria.id) > -1} />
                {categoria.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color="primary">
          {produto ? "Atualizar" : "Adicionar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProdutoForm;
