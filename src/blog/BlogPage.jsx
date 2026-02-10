import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './blogData';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sort articles: Newest first
  const sortedArticles = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = sortedArticles.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedArticles.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container py-5">
      <style>
        {`
          .card-hover {
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          }
          .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
          }
        `}
      </style>
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4">Woodworking Blog</h1>
        <p className="lead text-muted">Tips, tricks, and tutorials for your next build.</p>
      </div>

      <div className="row g-4">
        {currentArticles.map((article) => (
          <div className="col-md-6 col-lg-4" key={article.id}>
            <Link to={`/blog/${article.id}`} className="text-decoration-none h-100 d-block" style={{ color: 'inherit' }}>
              <div className="card h-100 shadow-sm border-0 card-hover">
                <img src={article.image} className="card-img-top" alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <small className="text-muted mb-2">{new Date(article.date).toLocaleDateString()}</small>
                  <h5 className="card-title fw-bold">{article.title}</h5>
                  <p className="card-text text-secondary flex-grow-1">{article.excerpt}</p>
                  <div className="btn btn-outline-dark mt-3 align-self-start" style={{ borderColor: 'var(--wk-orange)', color: 'var(--wk-orange)' }}>
                    Read Article
                  </div>
                </div>
              </div>
            </Link>
          </div>
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
  );
};

export default BlogPage;