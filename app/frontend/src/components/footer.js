import React from 'react';
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import "../styles/footer.css";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='footer-container'>
            <div className='info-container'>
                <div className='social-container'>
                    <p>Redes sociais</p>
                    <div className='social-icons'>
                        <a href='https://www.facebook.com/AUTOREITINTAS/?locale=pt_BR'><FaFacebookF className='icon'/></a>
                        <a href='https://www.instagram.com/autoreitintas/'><FaInstagramSquare className='icon'/></a>
                    </div>
                </div>
                <div className='endereco'>
                    <p>Endereço</p>
                    <p></p>SCIA Q 13 - Guará, Brasília - DF, 71250-220
                </div>
            </div>
            <hr className='barra'></hr>
            <div className='esclarecimento'>
                <p onClick={() => navigate("/sobre")}>Sobre</p>
                <p onClick={() => navigate("/ajuda")}>Ajuda</p>
            </div>
        </div>
    );
}

export default Footer;