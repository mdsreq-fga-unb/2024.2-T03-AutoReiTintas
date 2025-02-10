import React from "react";
import RoutesConfig from "./routes/routes";
import { CartProvider } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <RoutesConfig />
      </CartProvider>
    </UserProvider>
  );
}

export default App;