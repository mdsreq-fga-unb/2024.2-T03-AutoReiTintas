import React from "react";
import "../styles/productModal.css";

const ProductModal = ({ product, onClose, addToCart }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <h2>{product.nome}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-image-container">
            {product.imagens?.length > 0 ? (
              <img
                src={product.imagens[0].url_imagem}
                alt={product.nome}
                className="modal-product-image"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "caminho/para/imagem-padrao.jpg";
                }}
              />
            ) : (
              <div className="modal-image-placeholder">
                <span>Imagem não disponível</span>
              </div>
            )}
          </div>
          <div className="modal-product-info">
            <p>{product.descricao}</p>
            <p>Preço: R$ {product.preco}</p>
            <p>Categoria: {product.categoria}</p>
            <button 
              onClick={() => addToCart(product)}
              className="add-to-cart-btn"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;