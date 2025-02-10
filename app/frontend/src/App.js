import React, { useState, useEffect } from "react";
import RoutesConfig from "./routes/routes.js";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const itemExists = currentItems.find(item => item.id === product.id);
      if (itemExists) {
        return currentItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(currentItems => 
      currentItems.map(item => {
        if (item.id === productId) {
          return { ...item, quantity: Math.max(1, newQuantity) };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <RoutesConfig 
        addToCart={addToCart} 
        cartItems={cartItems} 
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}

export default App;
