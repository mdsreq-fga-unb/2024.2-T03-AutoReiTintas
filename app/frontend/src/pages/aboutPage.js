import React from "react";
import Header from "../components/header";

const AboutPage = () => {
    return(
        <div>
            <Header></Header>
            <h1 style={{padding: '20px',
  background: 'linear-gradient(to right, rgb(221, 222, 230), rgba(243, 244, 248, 0.88))',
  color: 'black'}}>Sobre a loja</h1>
            <div style={{display: 'flex', justifyContent: 'center', padding: '20px', width: '80%', margin: 'auto'}}>
                <p style={{fontSize: "20px"}}>O<b> Auto Rei Tintas</b> dispõe de técnicos qualificados e produtos de Alta Tecnologia para repintura de carro ou para seu negócio de lanternagem e pintura. </p>
            </div>
        </div>
    );
}

export default AboutPage;