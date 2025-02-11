import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Gallery from "../components/galeria";
import FilterBar from "../components/FilterBar";
import { getProdutos } from "../services/api";
import "../styles/productpage.css";

const ProductPage = () => {

  const [categoryFilter, setCategoryFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const handleFilterChange = (categoryId) => {
    setCategoryFilter(categoryId);
    setCurrentPage(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProdutos({
        page: currentPage,
        pageSize: pageSize,
        categoryId: categoryFilter,
      });
      setProducts(response.data);
      setTotalProducts(response.total);
    };

    fetchProducts();
  }, [categoryFilter, currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header />
      <h1 className="product-page-title">Produtos</h1>
      <div className="product-page-content">
        <FilterBar onFilter={handleFilterChange} />
        <div className="gallery-container">
          <Gallery products={products} />
          <Pagination
            currentPage={currentPage}
            totalItems={totalProducts}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Próxima
      </button>
    </div>
  );
};

export default ProductPage;