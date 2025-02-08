import React from "react";
import SideBar from "../components/SideBar";
import "../styles/menuStyle.css";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
    const navigate = useNavigate();
    return(
        <div className="container-menu">
            <SideBar />
            <div className="menu-container">
                <button onClick={() => navigate("/estoque")} >Consultar Produtos</button>
                <button onClick={() =>navigate("/estoque/novo")}>Cadastrar Produto</button>
            </div>
        </div>
    );
}
export default MenuPage;