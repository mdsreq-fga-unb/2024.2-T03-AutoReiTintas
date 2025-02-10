import React from "react";
import "../styles/galeria.css";
import { useCart } from "../contexts/CartContext";

const Gallery = ({ products = [] }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-container">
      {products.map((product) => (
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
            <button 
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;