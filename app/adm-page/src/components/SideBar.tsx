import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/sideBarStyle.css";
import logo_user from "../assets/images/user_person.png";
import carrinho from "../assets/images/shopping cart.png";
import pincel from "../assets/images/create.png";
import logo_db from "../assets/images/diamond.png";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="container">
      <div className="sidebar">
        <div
          className={isActive("/dashboard/minha-conta") ? "active" : ""}
          onClick={() => navigate("/dashboard/minha-conta")}
        >
          <img src={logo_user} alt="Minha Conta" />
          <h3>Minha Conta</h3>
        </div>
        <div
          className={isActive("/dashboard/estoque") ? "active" : ""}
          onClick={() => navigate("/dashboard/estoque")}
        >
          <img src={carrinho} alt="Gestão de Estoque" />
          <h3>Gestão de Estoque</h3>
        </div>
        <div
          className={isActive("/dashboard/administrar-contas") ? "active" : ""}
          onClick={() => navigate("/dashboard/administrar-contas")}
        >
          <img src={pincel} alt="Administrar Contas" />
          <h3>Administrar Contas</h3>
        </div>
        <div
          className={isActive("/dashboard") ? "active" : ""}
          onClick={() => navigate("/dashboard")}
        >
          <img src={logo_db} alt="Dashboards" />
          <h3>DashBoards</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
