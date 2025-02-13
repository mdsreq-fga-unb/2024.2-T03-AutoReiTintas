import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token'); 
  };

  const isAuthenticated = () => !!user;

  return (
    <UserContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);