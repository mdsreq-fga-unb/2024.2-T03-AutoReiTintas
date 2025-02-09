import React from "react";
import  Header  from "../components/header.js";
import Gallery from "../components/galeria.js";
import Capa from "../components/capaHome.js";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Capa></Capa>
      <h1 style={{margin: "30px"}}>Produtos</h1>
      <Gallery></Gallery>
    </div>
  );
};

export default HomePage;
