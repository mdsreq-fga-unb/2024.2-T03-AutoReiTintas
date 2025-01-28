import React from "react";
import "../styles/headerStyle.css";
import logo from '../assets/images/logo.png';
import lupa from '../assets/images/lupa.png';
import logo_carrinho from '../assets/images/logo_carrinho_compra.png';



const Header = () => {
  return (
    <div className="header">
      <div className="logo-menu">
        <div>
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <div>
          <h1 className="titulo">AUTO REI TINTAS</h1>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Busque por produtos, marcas e mais..."
          className="pesquisa-input"
          style={{
            backgroundImage: `url(${lupa})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "250px center",
            paddingRight: "40px",
          }}
        ></input>
      </div>
      <ul className="header-menu">
        <li>
          <img
            src={logo_carrinho}
            alt="logo de carrinho de compras"
            className="logo-carrinho"
          />
        </li>
        <li>
          <a href="/login">
            <button className="botao-login">Fazer Login</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
