import {React, useState} from "react";

import capaHome from "../utils/capaHome.png";
import logo from "../utils/logo.png";
import { AlignCenter, ChevronLeft, ChevronRight } from "lucide-react";

const Capa = () => {
    const images = [
        capaHome,
        logo,
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      return (
        <div style={{display: "flex", justifyContent: "center"}}>
          {/* Botão Esquerda */}
          <button
            onClick={prevSlide}
            style={{border: "none", backgroundColor: "black", cursor: "pointer", width: "100%", color: "white", hover: "pointer"}}
          >
            <ChevronLeft size={24} />
          </button>

          <img
            src={images[currentIndex]}
            style={{ width: "1500px", height: "500px" }}
            alt="Slide"
          />
    
    
          {/* Botão Direita */}
          <button
            onClick={nextSlide}
            style={{border: "none", backgroundColor: "black", cursor: "pointer", width: "100%", color: "white"}}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      );
    }

export default Capa;