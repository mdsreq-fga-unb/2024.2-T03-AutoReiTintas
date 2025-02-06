import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import EstoquePage from "./pages/EstoquePage";
import DashboardPage from "./pages/DashboardPage";
import AdministrarContasPage from "./pages/AdministrarContasPage";
import MinhaContaPage from "./pages/MinhaContaPage"; 
import DashboardLayout from "./components/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route path="estoque" element={<EstoquePage />} />
                  <Route path="administrar-contas" element={<AdministrarContasPage />} />
                  <Route path="minha-conta" element={<MinhaContaPage />} />
                  <Route path="dashboards" element={<DashboardPage />} />
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
