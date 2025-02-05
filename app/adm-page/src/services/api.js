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

// Função to add a new product
export const addProduto = async (produto) => {
  try {
    const response = await api.post('/api/produtos/', produto);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar produto:", error);
    throw error;
  }
};

// function to update a product
export const updateProduto = async (id, produto) => {
  try {
    const response = await api.put(`/api/produtos/${id}`, produto);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar produto:", error);
    throw error;
  }
};

// function to get storage from a product
export const getEstoqueProduto = async (produtoId) => {
  try {
    const response = await api.get(`/api/estoque/${produtoId}`);
    return response.data;
  } catch (error) {
    console.log(`Erro ao pegar a quantidade do estoque do produto ${produtoId}`);
    throw error;
  }
}

// function to update storage
export const updateEstoqueProduto = async (produtoId , quantidade) => {
  try {
    const response = await api.patch(`/api/estoque/${produtoId}`, { 
      quantidade_atual: quantidade 
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar estoque:", error);
    throw error;
  }
};

// function to remove a product
export const removeProduto = async (id) => {
  try {
    await api.delete(`api/produtos/${id}`);
    console.log("Produto excluído com sucesso");
  } catch (error) {
    console.error("Erro ao remover produto:", error.response || error.message);
    throw error;
  }
};

// function to create a new categorie
export const addCategoria = async (categoria) => {
  try {
    const response = await api.post('/api/categorias/', categoria);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar categoria:", error);
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

// function to get categorie from a product
export const getCategoriaProduto = async (produtoId) => {
  try {
    const response = await api.get(`/api/produto-categoria/${produtoId}/`);
    return response.data;
  } catch (error) {
    console.log("Error to find categorie from product " + produtoId);
    throw error;
  }
}
