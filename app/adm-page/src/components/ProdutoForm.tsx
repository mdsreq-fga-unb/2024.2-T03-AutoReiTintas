import React, { useState, useEffect } from "react";
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { addProduto, updateProduto } from "../services/api";
import { ProdutoCreate, ProdutoUpdate, ProdutoResponse, CategoriaResponse } from '../types/produtos';

interface ProdutoFormProps {
  produto: ProdutoResponse | null;
  categorias: CategoriaResponse[];
  onClose: () => void;
  onProdutoAddedOrUpdated: () => void;
}

const ProdutoForm: React.FC<ProdutoFormProps> = ({ produto, categorias, onClose, onProdutoAddedOrUpdated }) => {
  const [formData, setFormData] = useState<ProdutoCreate | ProdutoUpdate>({
    nome: '',
    descricao: '',
    preco: 0,
    categoria_id: 0,
    quantidade_inicial: 0,
    quantidade_estoque: 0 
  });

  useEffect(() => {
    if (produto) {
      setFormData({
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco,
        categoria_id: produto.categorias[0]?.id || 0,
        quantidade_inicial: produto.quantidade_estoque, 
        quantidade_estoque: produto.quantidade_estoque 
      });
    }
  }, [produto]);

  const handleSubmit = async () => {
    try {
      if (produto) {
        await updateProduto(produto.id, formData);
      } else {
        await addProduto(formData as ProdutoCreate);
      }
      onProdutoAddedOrUpdated(); 
      onClose(); 
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{produto ? "Editar Produto" : "Adicionar Produto"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Nome"
          fullWidth
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
          margin="normal"
        />
        <TextField
          label="Descrição"
          fullWidth
          value={formData.descricao}
          onChange={(e) => setFormData({...formData, descricao: e.target.value})}
          margin="normal"
        />
        <TextField
          label="Preço"
          type="number"
          fullWidth
          value={formData.preco}
          onChange={(e) => setFormData({...formData, preco: Number(e.target.value)})}
          margin="normal"
        />
        
        <TextField
          label="Quantidade no Estoque"
          type="number"
          fullWidth
          value={formData.quantidade_estoque}
          onChange={(e) => setFormData({...formData, quantidade_estoque: Number(e.target.value)})}
          margin="normal"
        />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>Categoria</InputLabel>
          <Select
            value={formData.categoria_id}
            onChange={(e) => setFormData({...formData, categoria_id: Number(e.target.value)})}
            label="Categoria"
          >
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {!produto && (
          <TextField
            label="Quantidade Inicial"
            type="number"
            fullWidth
            value={formData.quantidade_inicial}
            onChange={(e) => setFormData({...formData, quantidade_inicial: Number(e.target.value)})}
            margin="normal"
          />
        )}
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
