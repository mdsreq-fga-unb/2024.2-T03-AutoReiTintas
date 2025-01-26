import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',  
  withCredentials: true,  
  headers: {
    'Content-Type': 'application/json',  
  },
  timeout: 10000,  
});

export const getUsuarios = async () => {
  try {
    const response = await api.get('/api/usuarios/');
    return response.data;
  } catch (error) {
    console.error("Error to find users: ", error);
    throw error;
  }
};

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

