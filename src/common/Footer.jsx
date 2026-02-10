import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--wk-dark)', color: 'var(--wk-cream)' }} className="pt-5 pb-3 mt-auto">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
          
          {/* Column 1: Brand & About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--wk-orange)' }}>
              WoodKay
            </h5>
            <p>
              Your ultimate source for DIY woodworking plans, furniture tutorials, and inspiration. Build something beautiful today.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--wk-orange)' }}>
              Discover
            </h5>
            <p>
              <Link to="/plans" className="text-decoration-none" style={{ color: 'var(--wk-cream)' }}>Free Plans</Link>
            </p>
            <p>
              <Link to="/blog" className="text-decoration-none" style={{ color: 'var(--wk-cream)' }}>Tutorials</Link>
            </p>
            <p>
              <Link to="/about" className="text-decoration-none" style={{ color: 'var(--wk-cream)' }}>About Us</Link>
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--wk-orange)' }}>Contact</h5>
            <p>
              <i className="fas fa-envelope me-3"></i> info@woodkay.com
            </p>
            <p>
              <i className="fas fa-map-marker-alt me-3"></i> DIY Workshop, USA
            </p>
          </div>
          
          {/* Column 4: Socials */}
           <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
             <h5 className="text-uppercase mb-4 fw-bold" style={{ color: 'var(--wk-orange)' }}>Follow Us</h5>
             <div className="d-flex justify-content-center justify-content-md-start gap-2">
                <a href="#" className="btn btn-outline-light btn-floating" style={{ borderColor: 'var(--wk-orange)', color: 'var(--wk-orange)' }} role="button"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-outline-light btn-floating" style={{ borderColor: 'var(--wk-orange)', color: 'var(--wk-orange)' }} role="button"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-outline-light btn-floating" style={{ borderColor: 'var(--wk-orange)', color: 'var(--wk-orange)' }} role="button"><i className="fab fa-instagram"></i></a>
                <a href="#" className="btn btn-outline-light btn-floating" style={{ borderColor: 'var(--wk-orange)', color: 'var(--wk-orange)' }} role="button"><i className="fab fa-pinterest"></i></a>
             </div>
           </div>

        </div>

        <hr className="mb-4" style={{ borderColor: 'var(--wk-orange)' }} />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © {new Date().getFullYear()} <strong>WoodKay</strong>. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-center text-md-end">
               <a href="#" style={{ color: 'var(--wk-orange)', textDecoration: 'none' }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;