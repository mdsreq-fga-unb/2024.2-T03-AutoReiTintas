import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', 
  withCredentials: false, 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});

// function to test connection with api
export const testConnection = async () => {
  try {
    const response = await api.get('/');
    console.log('Conexão OK:', response.data);
    return true;
  } catch (error) {
    console.error('Falha na conexão:', error);
    return false;
  }
};


// function to get users
export const getUsuarios = async () => {
  try {
    const response = await api.get('/api/usuarios/');
    return response.data;
  } catch (error) {
    console.error("Error to find users: ", error);
    throw error;
  }
};

// function to make authentications
export const loginUsuario = async (email, senha) => {
  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, senha }),
  });

  if (!response.ok) {
    throw new Error("Falha no login");
  }

  return response.json();
};

// function to get all products
export const getProdutos = async () => {
  try {
    const response = await api.get("/api/produtos/");
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    throw error;
  }
};

export const removeProduto = async (id) => {
  try {
    const response = await api.delete(`/api/produtos/${id}`);

    if (response.status === 204) {
      console.log("Produto excluído com sucesso");
    } else {
      throw new Error("Erro ao excluir produto");
    }
  } catch (error) {
    console.error("Erro ao remover produto:", error.response || error.message);
    throw error;
  }
};


// function to add a new product
export const addProduto = async (produto) => {
  try {
    const response = await axios.post('/api/produtos', produto);
    console.log('Produto adicionado com sucesso:', response);
  } catch (error) {
    console.error('Erro ao adicionar produto:', error.response?.data || error.message);
  }
};

// function to update a product
export const updateProduto = async (id, produto) => {
  try {
    const response = await api.put(`api/produtos/${id}`, produto);
    return response.data; 
  } catch (error) {
    console.error("Error to update product:", error);
    throw error;
  }
};

// function to get categories
export const getCategorias = async () => {
  try {
    const response = await api.get("/api/categorias/");
    return response.data;
  } catch (error) {
    console.error("Error to find categorias:", error);
    throw error;
  }
};

// function to update storage
export const updateEstoqueProduto = async (id, quantidade) => {
  try {
    const response = await api.patch(`/api/estoque/${id}`, { quantidade_atual: quantidade });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar estoque:", error);
    throw error;
  }
};