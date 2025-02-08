import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import EstoquePage from "./pages/EstoquePage";
import DashboardPage from "./pages/DashboardPage";
import AdministrarContasPage from "./pages/AdministrarContasPage";
import MinhaContaPage from "./pages/MinhaContaPage";
import NovoProdutoPage from "./pages/NovoProdutoPage";
import NovoUsuarioPage from "./pages/NovoUsuarioPage";
import RecuperarContaPage from "./pages/RecuperarContaPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/recuperar-conta" element={<RecuperarContaPage />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route index element={<DashboardPage />} />
                  <Route path="estoque" element={<EstoquePage />} />
                  <Route path="estoque/novo" element={<NovoProdutoPage />} />
                  <Route path="administrar-contas" element={<AdministrarContasPage />} />
                  <Route path="administrar-contas/novo" element={<NovoUsuarioPage />} />
                  <Route path="minha-conta" element={<MinhaContaPage />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
