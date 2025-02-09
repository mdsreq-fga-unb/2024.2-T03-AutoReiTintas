import React, { useState, useEffect } from "react";
import { 
  TextField, Button, Dialog, DialogActions, DialogContent, 
  DialogTitle, Select, MenuItem, InputLabel, FormControl,
  Chip, Stack, IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { addProduto, updateProduto, addImagemProduto, removeImagemProduto } from "../services/api";
import { ProdutoCreate, ProdutoUpdate, ProdutoResponse, CategoriaResponse } from '../types/produtos';

interface ProdutoFormProps {
  produto: ProdutoResponse | null;
  categorias: CategoriaResponse[];
  onClose: () => void;
  onProdutoAddedOrUpdated: () => void;
}

interface ImagemForm {
  id?: number;
  url_imagem: string;
  ordem?: number;
}

const ProdutoForm: React.FC<ProdutoFormProps> = ({ produto, categorias, onClose, onProdutoAddedOrUpdated }) => {
  const [formData, setFormData] = useState<ProdutoCreate | ProdutoUpdate>({
    nome: '',
    descricao: '',
    codigo: 0,
    preco: 0,
    categoria_id: 0,
    quantidade_inicial: 0,
    quantidade_estoque: 0,
  });

  const [imagens, setImagens] = useState<ImagemForm[]>([]);
  const [novaImagem, setNovaImagem] = useState('');

  useEffect(() => {
    if (produto) {
      setFormData({
        nome: produto.nome,
        descricao: produto.descricao,
        codigo: produto.codigo,
        preco: produto.preco,
        categoria_id: produto.categorias[0]?.id || 0,
        quantidade_estoque: produto.quantidade_estoque,
      });
      setImagens(produto.imagens || []);
    }
  }, [produto]);

  const handleAddImagem = () => {
    if (novaImagem.trim()) {
      setImagens(prev => [...prev, { url_imagem: novaImagem }]);
      setNovaImagem('');
    }
  };

  const handleRemoveImagem = (index: number) => {
    const imagemToRemove = imagens[index];
    if (imagemToRemove.id) {
      removeImagemProduto(produto?.id!, imagemToRemove.id).catch(console.error);
    }
    setImagens(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      let produtoId;

      if (produto) {
        const updatedProduto = await updateProduto(produto.id, formData);
        produtoId = updatedProduto.id;

        const novasImagens = imagens.filter(img => !img.id);
        if (novasImagens.length > 0) {
          await addImagemProduto(produtoId, novasImagens.map(img => img.url_imagem));
        }
      } else {
        const novoProduto = await addProduto(formData as ProdutoCreate);
        produtoId = novoProduto.id;

        if (imagens.length > 0) {
          await addImagemProduto(produtoId, imagens.map(img => img.url_imagem));
        }
      }
      
      onProdutoAddedOrUpdated();
      onClose();
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    }
  };

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
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
          label="Código do Produto"
          fullWidth
          value={formData.codigo}
          onChange={(e) => setFormData({...formData, codigo: Number(e.target.value)})}
          margin="normal"
          type="number"
        />
        <TextField
          label="Preço"
          type="number"
          fullWidth
          value={formData.preco}
          onChange={(e) => setFormData({...formData, preco: Number(e.target.value)})}
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

        {produto && (
          <TextField
            label="Quantidade no Estoque"
            type="number"
            fullWidth
            value={formData.quantidade_estoque}
            onChange={(e) => setFormData({...formData, quantidade_estoque: Number(e.target.value)})}
            margin="normal"
          />
        )}

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

        <div style={{ marginTop: '20px' }}>
          <TextField
            label="URL da Imagem"
            fullWidth
            value={novaImagem}
            onChange={(e) => setNovaImagem(e.target.value)}
            margin="normal"
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleAddImagem}>
                  <AddIcon />
                </IconButton>
              )
            }}
          />

          <Stack direction="row" spacing={1} flexWrap="wrap">
            {imagens.map((imagem, index) => (
              <Chip
                key={index}
                label={`Imagem ${index + 1}`}
                onDelete={() => handleRemoveImagem(index)}
                deleteIcon={<DeleteIcon />}
                variant="outlined"
                style={{ margin: '4px' }}
              />
            ))}
          </Stack>
        </div>
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