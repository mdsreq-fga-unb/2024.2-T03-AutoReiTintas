import React, { useEffect, useState } from "react";
import { getProdutos } from "../services/api";
import "../styles/galeria.css";
import { useCart } from "../contexts/CartContext";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const response = await getProdutos();
        setProducts(response.data || []);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        alert("Erro ao carregar produtos");
      }
    };

    handleProduct();
  }, []);

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          {!product.imagens && (
            <div><h1>Imagem não disponível</h1></div>
          )}
          {product.imagens && product.imagens.length > 0 && (
            <iframe
              src={product.imagens[0].url_imagem}
              width="150"
              height="150"
              className="product-image"
              allow="autoplay"
            ></iframe>
          )}
          <div className="product-info">
            <p>{product.nome} - {product.descricao}</p>
            <p className="preco">R$ {product.preco}</p>
            <div>
              <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;