import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { blogData } from '../blog/blogData';
import { productData } from '../product/productData';

const COLORS = {
  cream: '#FAF3E1',
  gold: '#F5E7C6',
  orange: '#FA8112',
  dark: '#222222',
};

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const navbarTogglerRef = useRef(null);
  const collapseNavbarRef = useRef(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const lowercasedQuery = query.toLowerCase();

    const filteredBlogs = blogData
      .filter(blog => blog.title.toLowerCase().includes(lowercasedQuery))
      .map(blog => ({ ...blog, type: 'Blog', path: `/blog/${blog.id}` }));

    const filteredProducts = productData
      .filter(product => product.name.toLowerCase().includes(lowercasedQuery))
      .map(product => ({ ...product, type: 'Gear', path: `/products/${product.id}` }));
    
    const combinedResults = [...filteredBlogs, ...filteredProducts];
    setResults(combinedResults.slice(0, 7));

    if (combinedResults.length === 0) {
        setNoResults(true);
    } else {
        setNoResults(false);
    }
  }, [query]);

  const handleResultClick = () => {
    setQuery('');
    setResults([]);
    setIsSearchFocused(false);
    handleNavLinkClick();
  };

  const handleNavLinkClick = () => {
    if (collapseNavbarRef.current && collapseNavbarRef.current.classList.contains('show')) {
      navbarTogglerRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm bg-white py-3">
      <style>
        {`
          .nav-link-custom {
            color: ${COLORS.dark};
            font-weight: 500;
            padding: 0.5rem 1.5rem !important; /* Match px-4 from active state */
            transition: color 0.3s ease;
            white-space: nowrap;
          }
          .nav-link-custom:hover {
            color: ${COLORS.orange} !important;
          }
          .search-container {
            border: 1px solid #eee;
            border-radius: 50px;
            padding: 0.25rem 1rem;
            background: #f8f9fa;
            transition: all 0.3s ease;
          }
          .search-container:focus-within {
            background: #fff;
            border-color: ${COLORS.orange};
            box-shadow: 0 0 0 4px rgba(250, 129, 18, 0.1);
          }
          .search-input {
            border: none;
            background: transparent;
            box-shadow: none !important;
          }
          .btn-cta {
            background-color: ${COLORS.orange};
            color: white !important;
            transition: transform 0.2s;
          }
          .btn-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(250, 129, 18, 0.3);
          }
        `}
      </style>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" style={{ color: COLORS.dark, fontWeight: 800, fontSize: '1.8rem', textDecoration: 'none' }}>
          <i className="fas fa-tree" style={{ color: COLORS.orange }}></i>
          Wood<span style={{ color: COLORS.orange }}>Kay</span>
        </Link>
        <button
          ref={navbarTogglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: 'none', boxShadow: 'none' }}
        >
          <i
            className="fas fa-bars"
            style={{ color: COLORS.dark, fontSize: '1.5rem' }}
          ></i>
        </button>
        <div ref={collapseNavbarRef} className="collapse navbar-collapse" id="navbarNav">
          {/* Search Bar */}
          <div className="mx-auto my-3 my-lg-0 position-relative w-100" style={{ maxWidth: '500px' }}>
            <div className="d-flex align-items-center search-container">
              <i className="fas fa-search text-muted me-2"></i>
              <input
                type="text"
                className="form-control search-input p-1"
                placeholder="Search articles & gear..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
            </div>
            {isSearchFocused && query.trim() !== '' && (
              <ul className="list-group position-absolute w-100 shadow-lg" style={{ zIndex: 1001, top: '100%' }}>
                {results.length > 0 ? (
                  results.map(item => (
                    <Link
                      key={`${item.type}-${item.id}`}
                      to={item.path}
                      className="list-group-item list-group-item-action"
                      onClick={handleResultClick}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <div className="d-flex align-items-center">
                        <img src={item.image} alt={item.title || item.name} className="me-3 rounded" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                        <div className="flex-grow-1">
                          <div className="fw-bold">{item.title || item.name}</div>
                          <small className="text-muted">{item.type}</small>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : noResults && (
                  <li className="list-group-item text-muted">No results found</li>
                )}
              </ul>
            )}
          </div>

          <ul className="navbar-nav ms-auto align-items-center gap-lg-3">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link btn btn-cta rounded-pill px-4 py-2 fw-bold' : 'nav-link nav-link-custom'} to="/" onClick={handleNavLinkClick} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link btn btn-cta rounded-pill px-4 py-2 fw-bold' : 'nav-link nav-link-custom'} to="/products" onClick={handleNavLinkClick}>
                Recommended Gear
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link btn btn-cta rounded-pill px-4 py-2 fw-bold' : 'nav-link nav-link-custom'} to="/blog" onClick={handleNavLinkClick}>
                Tutorials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link btn btn-cta rounded-pill px-4 py-2 fw-bold' : 'nav-link nav-link-custom'} to="/about" onClick={handleNavLinkClick}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link nav-link-custom dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/terms-of-service" onClick={handleNavLinkClick}>Terms of Service</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/privacy-policy" onClick={handleNavLinkClick}>Privacy Policy</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;