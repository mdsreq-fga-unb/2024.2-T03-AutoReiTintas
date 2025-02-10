import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import SearchResults from "../components/searchResults";
import AccountPage from "../pages/AccountPage";
import ColoramaPage from "../pages/ColoramaPage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/colorama" element={<ColoramaPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;