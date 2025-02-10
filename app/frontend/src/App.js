import React from "react";
import RoutesConfig from "./routes/routes.js";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <RoutesConfig />
    </CartProvider>
  );
}

export default App;