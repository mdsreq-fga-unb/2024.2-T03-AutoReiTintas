import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import SearchResults from "../components/searchResults";
import AccountPage from "../pages/AccountPage";
import ColoramaPage from "../pages/ColoramaPage";
import AboutPage from "../pages/aboutPage";
import ContactPage from "../pages/contactPage";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductPage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/colorama" element={<ColoramaPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;