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

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? COLORS.orange : COLORS.dark,
    fontWeight: 600,
  });

  const navLinkCTAStyle = {
    backgroundColor: COLORS.orange,
    color: 'white',
    fontWeight: 600,
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: COLORS.cream }}>
      <div className="container-fluid" style={{ maxWidth: '1200px' }}>
        <Link className="navbar-brand" to="/" style={{ color: COLORS.dark, fontWeight: 800, fontSize: '1.8rem', textDecoration: 'none' }}>
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
          <div className="mx-auto my-2 my-lg-0 position-relative" style={{ flexBasis: '40%' }}>
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0"><i className="fas fa-search"></i></span>
              <input
                type="text"
                className="form-control border-start-0 shadow-none"
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
                  results.map((item) => (
                    <Link 
                      key={`${item.type}-${item.id}`} 
                      to={item.path} 
                      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                      onClick={handleResultClick}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <div>{item.title || item.name}</div>
                      <span className={`badge rounded-pill ${item.type === 'Blog' ? 'bg-info' : 'bg-secondary'}`}>{item.type}</span>
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
              <NavLink className="nav-link" to="/" style={navLinkStyle} onClick={handleNavLinkClick} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products" style={navLinkStyle} onClick={handleNavLinkClick}>
                Recommended Gear
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blog" style={navLinkStyle} onClick={handleNavLinkClick}>
                Tutorials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link btn rounded-pill px-4 py-2" to="/about" style={navLinkCTAStyle} onClick={handleNavLinkClick}>
                About Us
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color: COLORS.dark, fontWeight: 600}}>
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