import React from 'react';
import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + (item.preco * item.quantity), 0);

  return (
    <div style={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px", width: "300px" }}>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "15px", padding: "10px", backgroundColor: "white", borderRadius: "5px" }}>
                <p style={{ margin: 0, fontWeight: "bold" }}>{item.nome}</p>
                <p style={{ margin: "5px 0" }}>Preço unitário: R$ {item.preco.toFixed(2)}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                    style={{ width: "50px", textAlign: "center" }}
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p style={{ margin: "5px 0" }}>Total: R$ {(item.preco * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: "#ff4444", color: "white", border: "none", padding: "5px 10px" }}>Remover</button>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", fontWeight: "bold" }}>Total do Carrinho: R$ {total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;