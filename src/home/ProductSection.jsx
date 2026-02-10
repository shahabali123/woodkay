import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../product/productData';

// Get the last 3 products to feature on the home page
const featuredProducts = productData.slice(-3);

const ProductSection = () => {
  const COLORS = {
    orange: '#FA8112',
    cream: '#FAF3E1',
  };

  return (
    <div className="py-5" style={{ backgroundColor: COLORS.cream, clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
      <div className="container px-4 py-5" id="featured-products">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Recommended Gear</h2>
          <p className="lead text-muted">Our favorite tools and supplies to get the job done</p>
        </div>
        <div className="row g-5 py-5 row-cols-1 row-cols-lg-3">
          {featuredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.classList.add('shadow-lg'); }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.classList.remove('shadow-lg'); }}
              >
                <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '225px', objectFit: 'cover' }} />
                <div className="position-absolute top-0 end-0 m-2">
                  <span className="badge bg-dark fs-6">{product.price}</span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text flex-grow-1 text-secondary">{product.description}</p>
                  <div className="mt-auto">
                    <Link to={`/products/${product.id}`} className="btn fw-bold w-100" style={{backgroundColor: COLORS.orange, color: 'white'}}>
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
            <Link to="/products" className="btn btn-outline-dark rounded-pill px-5 py-3 fw-bold">
                View All Recommended Gear
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;