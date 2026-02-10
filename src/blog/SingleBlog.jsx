import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from './blogData';

const SingleBlog = () => {
  const { id } = useParams();
  const article = blogData.find((post) => post.id === parseInt(id));

  if (!article) {
    return (
      <div className="container py-5 text-center">
        <h2>Article not found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <Link to="/blog" className="text-decoration-none mb-4 d-inline-block" style={{ color: 'var(--wk-orange)' }}>
            <i className="fas fa-arrow-left me-2"></i> Back to Tutorials
          </Link>
          
          <h1 className="fw-bold display-4 mb-3">{article.title}</h1>
          <p className="text-muted mb-4">Published on {new Date(article.date).toLocaleDateString()}</p>
          
          <img src={article.image} alt={article.title} className="img-fluid rounded shadow-sm mb-5 w-100" />
          
          <div className="article-content fs-5 lh-lg" style={{ color: '#333' }}>
            {article.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;