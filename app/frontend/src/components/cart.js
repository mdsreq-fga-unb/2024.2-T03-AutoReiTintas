import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px", width: "300px" }}>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <p>{item.nome}</p>
              <p>Preço: R$ {item.preco}</p>
              <button onClick={() => removeFromCart(item)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;