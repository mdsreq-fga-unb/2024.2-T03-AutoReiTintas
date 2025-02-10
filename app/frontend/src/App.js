import React, { useState } from "react";
import RoutesConfig from "./routes/routes.js";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <RoutesConfig addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;