import React, { useState } from 'react';

const Hero = () => {
  const [isGearHovered, setIsGearHovered] = useState(false);
  const [isSkillHovered, setIsSkillHovered] = useState(false);

  const COLORS = {
    orange: '#FA8112',
    gold: '#F5E7C6',
    dark: '#222222',
  };

  const heroStyle = {
    minHeight: '85vh',
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/media/images/hero.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Creates a simple parallax effect
  };

  const gearButtonStyle = {
    backgroundColor: COLORS.orange,
    borderColor: COLORS.orange,
    color: 'white',
    transition: 'all 0.3s ease-in-out',
    transform: isGearHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isGearHovered ? '0 10px 20px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
  };

  const skillButtonStyle = {
    borderColor: COLORS.gold,
    color: COLORS.gold,
    transition: 'all 0.3s ease-in-out',
    backgroundColor: isSkillHovered ? COLORS.gold : 'transparent',
    color: isSkillHovered ? COLORS.dark : COLORS.gold,
    transform: isSkillHovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: isSkillHovered ? '0 10px 20px rgba(0,0,0,0.2)' : 'none',
  };

  return (
    <div className="d-flex align-items-center text-white" style={heroStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <h1 className="display-2 fw-bolder" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Your Workshop, Reimagined.
            </h1>
            <p className="lead fs-4 my-4" style={{ color: COLORS.gold }}>
              Stop dreaming, start building. Access a library of high-quality, easy-to-follow DIY woodworking plans and tutorials. Build furniture you're proud of.
            </p>
            <div className="d-grid gap-3 d-sm-flex">
              <a
                href="#featured-products"
                className="btn btn-lg px-4 py-3 fw-bold"
                style={gearButtonStyle}
                onMouseEnter={() => setIsGearHovered(true)}
                onMouseLeave={() => setIsGearHovered(false)}
              >
                Explore Recommended Gear
              </a>
              <a href="#latest-tutorials" className="btn btn-lg px-4 py-3 fw-bold" style={skillButtonStyle}
                onMouseEnter={() => setIsSkillHovered(true)}
                onMouseLeave={() => setIsSkillHovered(false)}>
                Learn a Skill
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;