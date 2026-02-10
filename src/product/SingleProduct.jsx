import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productData } from './productData';

const SingleProduct = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-3">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={product.image} alt={product.name} className="img-fluid rounded shadow-lg" />
        </div>
        <div className="col-md-6">
          <Link to="/products" className="text-decoration-none mb-3 d-inline-block" style={{ color: 'var(--wk-orange)' }}>
            <i className="fas fa-arrow-left me-2"></i> Back to Recommended Gear
          </Link>
          <h1 className="display-5 fw-bold">{product.name}</h1>
          <p className="text-muted">Brand: {product.brand}</p>
          <p className="fs-5 lh-base my-4">{product.description}</p>
          <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded">
            <h2 className="fw-bold my-0" style={{ color: 'var(--wk-dark)' }}>{product.price}</h2>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="btn btn-cta-orange btn-lg">
              Check Price <i className="fas fa-external-link-alt ms-2"></i>
            </a>
          </div>
          <small className="d-block text-muted mt-3">As an affiliate, we may earn a commission from qualifying purchases at no extra cost to you.</small>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;