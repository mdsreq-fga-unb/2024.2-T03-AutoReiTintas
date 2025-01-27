import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',  
  withCredentials: true,  
  headers: {
    'Content-Type': 'application/json',  
  },
  timeout: 10000,  
});

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
  try {
    const response = await api.post('/auth/login', { email, senha });

    console.log(response);  

    const token = response.data.access_token; 
    
    localStorage.setItem('authToken', token);  
    
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    return response.data;
  } catch (error) {
    console.error("Login Error: ", error);
    throw error; 
  }
};

// function to get all products
export const getProdutos = async () => {
  try {
    const response = await api.get("api/produtos");
    return response.data;
  } catch (error) {
    console.error("Error to load products:", error)
    throw error;
  }
}

// function to add a new product
export const addProduto = async (produto) => {
  try {
    const response = await api.post("api/produtos", produto);
    return response.data;
  } catch (error) {
    console.error("Can't add product:", error)
    throw error;
  }
}

// function to tremove a product
export const removeProduto = async (id, produto) => {
  try {
    await api.delete(`api/produtos/${id}`, produto);
  } catch (error) {
    console.error("Error to remove product:", error);
    throw error;
  }
};

// function to update a product
export const updateProduto = async (id, produto) => {
  try {
    const response = await api.put(`api/produtos/${id}`, produto);
    return response.data; // Retorna o produto atualizado
  } catch (error) {
    console.error("Error to update product:", error);
    throw error;
  }
};

// function to get categories
export const getCategorias = async () => {
  try {
    const response = await api.get("/api/categorias");
    return response.data;
  } catch (error) {
    console.error("Error to find categorias:", error);
    throw error;
  }
};