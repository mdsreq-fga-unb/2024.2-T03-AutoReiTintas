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

// function to register a new user
export const registerUser = async (data) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    throw error;
  }
};

// function to get all products
export const getProdutos = async (params = {}) => {
  try {
    const response = await api.get('/api/produtos/', {
      params: {
        page: params.page || 1, 
        page_size: params.pageSize || 10,  
        search: params.search || '', 
        categoria_id: params.categoryId || null  
      }
    });
    return {
      data: response.data.items || [], 
      total: response.data.total || 0, 
      page: response.data.page || 1,  
      pageSize: response.data.page_size || 10  
    };
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    return { data: [], total: 0, page: 1, pageSize: 10 };
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

// function to get role from a user
export const getUsuarioRole = async (usuarioId) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) throw new Error("Token não encontrado");
    
    const response = await api.get(`/api/usuario_roles/${usuarioId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar role do usuário:", error);
    throw error;
  }
};

// function to send revocery email
export const sendRecoveryEmail = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar email de recuperação:", error);
    throw error;
  }
};