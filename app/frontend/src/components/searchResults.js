import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/galeria.css";
import { useCart } from "../contexts/CartContext";
import Header from "./header";
import ProductModal from "./productModal";

const SearchResults = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <div className="product-container">
        {results.length > 0 ? (
          results.map((product) => (
            <div key={product.id} className="product-item">
              <div className="image-container">
                {product.imagens?.length > 0 ? (
                  <img
                    src={product.imagens[0].url_imagem}
                    alt={product.nome}
                    className="product-image"
                    loading="lazy"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "caminho/para/imagem-padrao.jpg";
                    }}
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>Imagem não disponível</span>
                  </div>
                )}
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.nome}</h3>
                <p className="product-description">{product.descricao}</p>
                <p className="product-price">R$ {product.preco}</p>
                
                <div className="button-group">
                  <button 
                    onClick={() => addToCart(product)}
                    className="add-to-cart-btn"
                  >
                    Adicionar ao Carrinho
                  </button>
                  <button 
                    onClick={() => openModal(product)}
                    className="view-details-btn"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
          addToCart={addToCart}
        />
      )}
    </>
  );
};

export default SearchResults;