import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUsuario = async (email, senha) => {
  try {
    const response = await api.post('/auth/login', { email, senha });
    return response.data; 
  } catch (error) {
    throw error;  
  }
};

export const registerUser = async (data) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export default api;
