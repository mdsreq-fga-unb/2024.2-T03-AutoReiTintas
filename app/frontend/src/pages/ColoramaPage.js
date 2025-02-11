import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Header from "../components/header";
import { ChromePicker } from "react-color";
import "../styles/colorama.css";

const CarModel = ({ color }) => {
  const { scene } = useGLTF("/models/car_model.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color);
        child.material.needsUpdate = true;
      }
    });
  }, [color, scene]);

  return <primitive object={scene} scale={1.5} />;
};

const ColoramaPage = () => {
  const [color, setColor] = useState("#ffffff");

  const colors = [
    "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ffffff", "#000000"
  ];

  return (
    <div className="colorama-container">
      <Header />
      <div className="content">
        <div className="car-display">
          <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <CarModel color={color} />
            <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>

        <div className="color-palette">
          <h2>Escolha uma Cor</h2>

          <div className="color-options">
            {colors.map((colorOption) => (
              <button
                key={colorOption}
                onClick={() => setColor(colorOption)}
                style={{ backgroundColor: colorOption }}
              />
            ))}
          </div>

          <div className="custom-color-picker">
            <ChromePicker
              color={color}
              onChangeComplete={(color) => setColor(color.hex)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColoramaPage;