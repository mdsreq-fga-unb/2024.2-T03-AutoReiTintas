import React from "react";
import "../styles/cartDropdown.css";
import { useCart } from "../contexts/CartContext";

const CartDropdown = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const total = cartItems.reduce((acc, item) => acc + item.preco * item.quantity, 0);

  const generateWhatsAppMessage = () => {
    let message = "Olá, gostaria de finalizar a compra dos seguintes itens:\n\n";
    cartItems.forEach(item => {
      message += `${item.nome} - Quantidade: ${item.quantity} - Preço: R$ ${(item.preco * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal: R$ ${total.toFixed(2)}`;
    return message;
  };

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "556199755078";
    const message = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="cart-dropdown">
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <p>{item.nome}</p>
                <p>Preço unitário: R$ {item.preco.toFixed(2)}</p>
                <div className="quantity-control">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <p>Total: R$ {(item.preco * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">Total do Carrinho: R$ {total.toFixed(2)}</div>
          <button onClick={handleWhatsAppRedirect} className="whatsapp-button">
            Finalizar Compra no WhatsApp
          </button>
        </>
      )}
    </div>
  );
};

export default CartDropdown;