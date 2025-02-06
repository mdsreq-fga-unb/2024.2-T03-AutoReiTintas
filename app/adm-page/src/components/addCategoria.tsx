import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { addCategoria } from '../services/api';  

const CategoriaForm = () => {
  const [nome, setNome] = useState('');
  const [categoriaPaiId, setCategoriaPaiId] = useState<string | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaCategoria = {
      nome,
      categoria_pai_id: categoriaPaiId,
    };

    try {
      const categoriaCriada = await addCategoria(novaCategoria);
      console.log("Categoria criada:", categoriaCriada);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nome da Categoria"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        fullWidth
        margin="normal"
        required
      />

      <FormControl fullWidth margin="normal">
        <InputLabel>Categoria Pai (opcional)</InputLabel>
        <Select
          value={categoriaPaiId}
          onChange={(e) => setCategoriaPaiId(e.target.value as string | null)}
          label="Categoria Pai"
        >
          <MenuItem value="">Nenhuma</MenuItem>
          <MenuItem value={1}>Categoria Exemplo 1</MenuItem>
          <MenuItem value={2}>Categoria Exemplo 2</MenuItem>
        </Select>
      </FormControl>

      <Button type="submit" color="primary" variant="contained">
        Criar Categoria
      </Button>
    </form>
  );
};

export default CategoriaForm;
