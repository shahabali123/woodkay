import React, { useState } from 'react';
import { productData } from './productData';
import ProductCard from './ProductCard';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = productData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <style>
        {`
          .card-hover {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
          }
          .btn-cta-orange {
            background-color: var(--wk-orange);
            color: white;
            border-color: var(--wk-orange);
          }
          .btn-cta-orange:hover {
            background-color: #e0710b;
            color: white;
            border-color: #e0710b;
          }
        `}
      </style>
      <div className="product-hero mb-5">
        <img src='/media/images/hero.jpg' className='img-fluid'/>
      </div>
      <div className="container pb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav className="mt-5 d-flex justify-content-center">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage - 1)}>
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                  style={currentPage === index + 1 ? { backgroundColor: 'var(--wk-orange)', borderColor: 'var(--wk-orange)', color: 'white' } : {}}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => paginate(currentPage + 1)}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
      </div>
    </>
  );
};

export default ProductsPage;