import React from 'react';

const AboutUs = () => {
  return (
    <>
      {/* Header Section */}
      <div className="py-5 text-center" style={{ backgroundColor: 'var(--wk-gold)' }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Story</h1>
          <p className="lead text-muted">
            More than just plans; we're a community of builders, creators, and dreamers.
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Image */}
          <div className="col-lg-6">
            <img 
              src="/media/images/hero.jpg" 
              className="img-fluid rounded shadow-lg" 
              alt="Woodworker in a workshop" 
            />
          </div>
          {/* Text Content */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-3" style={{ color: 'var(--wk-orange)' }}>From a Garage Hobby to a Global Community</h2>
            <p className="fs-5 mb-4">
              WoodKay started in a small, dusty garage with a simple idea: everyone deserves the satisfaction of building something with their own two hands. Our founder, Alex, was tired of seeing beautiful furniture with outrageous price tags and confusing, expensive plans that were impossible for beginners to follow.
            </p>
            <p className="fs-5 mb-4">
              What began as a weekend hobby of simplifying designs and sharing notes with friends quickly grew into a passion. We believe that woodworking shouldn't be intimidating. It's a timeless craft that teaches patience, precision, and creativity. Our mission is to break down the barriers, providing clear, affordable, and accessible plans for everyone, from the first-time DIYer to the seasoned craftsperson.
            </p>
            <p className="fs-5">
              Today, WoodKay is a thriving online workshop where thousands of people come to find their next project, learn a new skill, and share their incredible creations.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row text-center g-4 py-5 mt-5">
          <div className="col-lg-4">
            <div className="p-4 rounded-3 h-100" style={{backgroundColor: 'var(--wk-cream)'}}>
                <i className="fas fa-drafting-compass fa-3x mb-3" style={{color: 'var(--wk-orange)'}}></i>
                <h3 className="fw-bold">Beginner Friendly</h3>
                <p>Our plans are designed with clear, step-by-step instructions and diagrams that anyone can follow.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 rounded-3 h-100" style={{backgroundColor: 'var(--wk-cream)'}}>
                <i className="fas fa-dollar-sign fa-3x mb-3" style={{color: 'var(--wk-orange)'}}></i>
                <h3 className="fw-bold">Budget Conscious</h3>
                <p>We focus on using common, affordable materials you can find at any local hardware store.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="p-4 rounded-3 h-100" style={{backgroundColor: 'var(--wk-cream)'}}>
                <i className="fas fa-users fa-3x mb-3" style={{color: 'var(--wk-orange)'}}></i>
                <h3 className="fw-bold">Community Driven</h3>
                <p>Join a network of fellow makers to ask questions, share your builds, and get inspired.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;