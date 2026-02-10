import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <Link to={`/products/${product.id}`} className="text-decoration-none h-100 d-block" style={{ color: 'inherit' }}>
        <div className="card h-100 shadow-sm border-0 card-hover">
          <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">{product.name}</h5>
            <p className="card-text text-secondary flex-grow-1">{product.description}</p>
            <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
              <h5 className="fw-bold my-0" style={{ color: 'var(--wk-dark)' }}>{product.price}</h5>
              <div className="btn btn-cta-orange">
                View Details
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;