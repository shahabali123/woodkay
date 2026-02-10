import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../blog/blogData';

// Get the latest 3 articles
const latestArticles = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

const BlogSection = () => {
  const COLORS = {
    orange: '#FA8112',
  };

  return (
    <div className="py-5">
      <div className="container px-4" id="latest-tutorials">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">Learn a New Skill</h2>
          <p className="lead text-muted">Read our latest articles and improve your craft</p>
        </div>
        <div className="row g-5 py-5 row-cols-1 row-cols-lg-3">
          {latestArticles.map((article) => (
            <div className="col" key={article.id}>
              <div 
                className="card h-100 shadow-sm border-0"
                style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.classList.add('shadow-lg'); }}
                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.classList.remove('shadow-lg'); }}
              >
                <img src={article.image} className="card-img-top" alt={article.title} style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <small className="text-muted">{new Date(article.date).toLocaleDateString()}</small>
                  <h3 className="card-title fs-5 fw-bold mt-2">{article.title}</h3>
                  <p className="card-text flex-grow-1 text-secondary">{article.excerpt}</p>
                  <Link to={`/blog/${article.id}`} className="btn btn-link text-decoration-none p-0 fw-bold mt-auto align-self-start" style={{color: COLORS.orange}}>
                    Read More <i className="fas fa-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
            <Link to="/blog" className="btn btn-outline-dark rounded-pill px-5 py-3 fw-bold">
                Read All Articles
            </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;