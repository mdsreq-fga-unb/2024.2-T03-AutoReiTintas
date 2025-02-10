import React, { useState, useEffect } from "react";
import { getCategorias } from "../services/api";
import "../styles/filterbar.css";

const FilterBar = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategorias();
      setCategories(response);
    };
    fetchCategories();
  }, []);

  const handleFilterChange = (categoryId) => {
    const newSelectedCategory = categoryId === selectedCategory ? "" : categoryId;
    setSelectedCategory(newSelectedCategory);
    onFilter(newSelectedCategory);
  };

  return (
    <div className="filter-bar">
      {categories.map((category) => (
        <div key={category.id} className="category-item">
          <input
            type="checkbox"
            id={`category-${category.id}`}
            value={category.id}
            checked={selectedCategory === category.id}
            onChange={() => handleFilterChange(category.id)}
            className="category-checkbox"
          />
          <label htmlFor={`category-${category.id}`} className="category-label">
            {category.nome}
          </label>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;