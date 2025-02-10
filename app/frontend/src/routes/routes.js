import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import SearchResults from "../components/searchResults";
import { CartProvider } from "../contexts/CartContext";

const RoutesConfig = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/produtos" element={<ProductPage />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default RoutesConfig;