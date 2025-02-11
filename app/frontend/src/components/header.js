import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../utils/logo.png';
import lupa from '../utils/lupa.png';
import logo_carrinho from '../utils/logo_carrinho_compra.png';
import CartDropdown from './CartDropdown';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import { getProdutos } from "../services/api";
import "../styles/header.css";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      const response = await getProdutos({ search: searchQuery });
      navigate("/search", { state: { results: response.data } });
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="header-geral">
      <div className="header">
        <div className="logo-menu">
          <div>
            <a href="/">
              <img src={logo} alt="logo" className="logo" />
            </a>
          </div>
          <div onClick={() => navigate("/")} className="nome-marca">
            <div>
              <h1 className="titulo">AUTO REI</h1>
            </div>
            <div>
              <h3 className="subtitulo">TINTAS AUTOMOTIVAS</h3>
            </div>
          </div>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Busque por produtos, marcas e mais..."
            className="pesquisa-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
            style={{
              backgroundImage: `url(${lupa})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              paddingRight: "40px",
            }}
          />
        </div>
        <ul className="header-menu">
          <li onClick={toggleCart}>
            <div className="cart-icon">
              <img
                src={logo_carrinho}
                alt="logo de carrinho de compras"
                className="logo-carrinho"
              />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </div>
          </li>
          <li>
            {isAuthenticated() ? (
              <>
                <button onClick={() => navigate("/account")} className="botao-login">
                  Acessar Conta
                </button>
                <button onClick={handleLogout} className="botao-login">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/login")} className="botao-login">
                  Fazer Login
                </button>
                <button onClick={() => navigate("/cadastro")} className="botao-login">
                  Registrar
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
      <div className="nav">
        <h1 onClick={() => navigate("/")}>Home</h1>
        <h1 onClick={() => navigate("/produtos")}>Produtos</h1>
        <h1 onClick={() => navigate("/sobre")}>Sobre a Loja</h1>
        <h1 onClick={() => navigate("/contato")}>Contato</h1>
        <h1 onClick={() => navigate("/colorama")}>Colorama</h1>
      </div>
      {cartOpen && (
        <CartDropdown
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
    </div>
  );
};

export default Header;