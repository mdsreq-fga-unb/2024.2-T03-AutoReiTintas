import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Gallery from "../components/galeria";
import Capa from "../components/capaHome";
import { getProdutos } from "../services/api";

const HomePage = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const response = await getProdutos();
        const allProducts = response.data || [];
        const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());
        const selectedProducts = shuffledProducts.slice(0, 10); // Seleciona os 10 primeiros produtos aleatórios
        setRandomProducts(selectedProducts);
      } catch (error) {
        console.error("Erro ao carregar produtos aleatórios:", error);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <div>
      <Header />
      <Capa />
      <h1 style={{ margin: "30px" }}> Últimas Ofertas </h1>
      <Gallery products={randomProducts} />
    </div>
  );
};

export default HomePage;