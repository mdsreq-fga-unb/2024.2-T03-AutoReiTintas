import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AdminPage from './components/AdminPage';
import EstoquePage from './components/EstoquePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/estoque" element={<EstoquePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
