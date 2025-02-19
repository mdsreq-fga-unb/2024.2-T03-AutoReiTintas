import React, { useState, useEffect, useCallback } from "react";
import capa1 from "../utils/capa1.jpg"; 
import capa2 from "../utils/capa2.jpg";
import capa3 from "../utils/capa3.jpg";
import capa4 from "../utils/capa4.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/capa.css";

const Capa = () => {
  const images = [
    capa1,
    capa2,
    capa3,
    capa4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

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
              alt={`Slide ${index + 1}`}
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