import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

export const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
