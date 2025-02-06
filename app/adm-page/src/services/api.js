import axios from 'axios';
import jwtDecode from 'jwt-decode';

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

// function to create a new user
export const createUsuario = async (usuario) => {
  try {
    const response = await api.post('/api/usuarios/', usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
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

  const data = await response.json();
  localStorage.setItem('token', data.access_token);
  return data;
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

// function to update information form a user
export const atualizarUsuario = async (id, usuario) => {
  try {
    const response = await api.put(`/api/usuarios/${id}`, usuario);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw new Error("Não foi possível atualizar os dados do usuário. Verifique as informações e tente novamente.");
  }
};

// function to get current user
export const getUsuarioAtual = async () => {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) {
      throw new Error("Token não encontrado");
    }

    const decodedToken = jwtDecode(token);
    const usuarioId = decodedToken.sub;

    const response = await api.get(`/api/usuarios/${usuarioId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário atual:", error);
    throw error;
  }
};

// function to delete a user
export const deletarUsuario = async (id) => {
  try {
    await api.delete(`/api/usuarios/${id}`);
    return { message: "Usuário deletado com sucesso!" };
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    throw new Error("Não foi possível deletar o usuário. Tente novamente mais tarde.");
  }
};


// function to promove user to adm
export const tornarAdmin = async (usuarioId) => {
  try {
    const response = await api.post('/api/usuario_roles/', {
      usuario_id: usuarioId,
      role_id: 1
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao tornar usuário admin:", error);
    throw error;
  }
};