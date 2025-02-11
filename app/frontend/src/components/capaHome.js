import React, { useState, useEffect } from "react";
import capaHome from "../utils/capaHome.png";
import logo from "../utils/logo.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/capa.css";

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); 
    return () => clearInterval(interval); 
  }, [nextSlide]);

  return (
    <div className="slider-container">
      <button className="slider-btn" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>

      <div className="slider-wrapper">
        <div
          className="slider-images"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className="slider-image"
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>

      <button className="slider-btn" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Capa;