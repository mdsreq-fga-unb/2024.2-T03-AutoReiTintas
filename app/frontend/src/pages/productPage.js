import React from "react";
import Header from "../components/header";
import Gallery from "../components/galeria";

const ProductPage = ({ addToCart }) => {
    return (
        <div>
            <Header></Header>
            <h1 style={{padding: "20px", background: "linear-gradient(to right, rgb(221, 222, 230), rgba(243, 244, 248, 0.88)", color:"black", }}>Produtos</h1>
            <Gallery addToCart={addToCart}></Gallery>
        </div>
    );
}

export default ProductPage;