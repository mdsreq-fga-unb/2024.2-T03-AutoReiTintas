import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminPage from './components/AdminPage';
import EstoquePage from './components/EstoquePage';
import ProtectedRoute from './components/ProtectedRoute'; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route
          path="/estoque"
          element={
            <ProtectedRoute>
              <EstoquePage />  
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
