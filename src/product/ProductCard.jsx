import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm border-0">
        <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '250px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{product.name}</h5>
          <p className="card-text text-secondary flex-grow-1">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="fw-bold my-0" style={{ color: 'var(--wk-dark)' }}>{product.price}</h5>
            <small className="text-muted">Brand: {product.brand}</small>
          </div>
        </div>
        <div className="card-footer bg-transparent border-top-0 pb-3">
          <Link to={`/products/${product.id}`} className="btn btn-cta-orange w-100">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;