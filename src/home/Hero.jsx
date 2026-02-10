import React from 'react';

const Hero = () => {
  const COLORS = {
    orange: '#FA8112',
    gold: '#F5E7C6',
    dark: '#222222',
  };

  // Array to generate the background cubes
  const cubes = [...Array(10)];

  return (
    <>
      <style>
        {`
          @keyframes animate-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes animate-cubes {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
            }
            100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0;
              border-radius: 50%;
            }
          }

          .hero-container {
            background: linear-gradient(-45deg, #232323, #3f3f3f, #232323, #1a1a1a);
            background-size: 400% 400%;
            animation: animate-gradient 15s ease infinite;
            position: relative;
            overflow: hidden;
          }

          .background-cubes {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }

          .background-cubes div {
            position: absolute;
            display: block;
            list-style: none;
            width: 20px;
            height: 20px;
            background: rgba(250, 129, 18, 0.2);
            animation: animate-cubes 25s linear infinite;
            bottom: -150px;
            border: 1px solid rgba(250, 129, 18, 0.3);
          }

          .background-cubes div:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
          .background-cubes div:nth-child(2) { left: 10%; width: 20px; height: 20px; animation-delay: 2s; animation-duration: 12s; }
          .background-cubes div:nth-child(3) { left: 70%; width: 20px; height: 20px; animation-delay: 4s; }
          .background-cubes div:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
          .background-cubes div:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
          .background-cubes div:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
          .background-cubes div:nth-child(7) { left: 35%; width: 150px; height: 150px; animation-delay: 7s; }
          .background-cubes div:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
          .background-cubes div:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
          .background-cubes div:nth-child(10) { left: 85%; width: 150px; height: 150px; animation-delay: 0s; animation-duration: 11s; }

          .hero-content {
            position: relative;
            z-index: 2;
          }

          .hero-title {
            text-shadow: 0 4px 15px rgba(0,0,0,0.4);
            animation: fadeInDown 1s ease-out;
          }

          .hero-subtitle {
            color: ${COLORS.gold};
            animation: fadeInUp 1s ease-out 0.3s;
            animation-fill-mode: backwards;
          }
          
          .hero-buttons {
            animation: fadeInUp 1s ease-out 0.6s;
            animation-fill-mode: backwards;
          }

          .btn-hero {
            transition: all 0.3s ease-in-out;
          }

          .btn-hero-primary {
            background-color: ${COLORS.orange};
            border-color: ${COLORS.orange};
            color: white;
          }

          .btn-hero-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            background-color: #e0710b;
            border-color: #e0710b;
            color: white;
          }

          .btn-hero-secondary {
            border-color: ${COLORS.gold};
            color: ${COLORS.gold};
            background-color: transparent;
          }

          .btn-hero-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
            background-color: ${COLORS.gold};
            color: ${COLORS.dark};
            border-color: ${COLORS.gold};
          }

          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div className="d-flex align-items-center text-white hero-container" style={{ minHeight: '85vh' }}>
        <div className="background-cubes">
          {cubes.map((_, index) => <div key={index}></div>)}
        </div>
        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-8 col-md-10">
              <h1 className="display-1 fw-bolder hero-title">
                Your Workshop, Reimagined.
              </h1>
              <p className="lead fs-3 my-4 hero-subtitle">
                Stop dreaming, start building. Access a library of high-quality, easy-to-follow DIY woodworking plans and tutorials. Build furniture you're proud of.
              </p>
              <div className="d-grid gap-3 d-sm-flex hero-buttons">
                <a
                  href="#featured-products"
                  className="btn btn-hero btn-hero-primary btn-lg px-4 py-3 fw-bold"
                >
                  Explore Recommended Gear
                </a>
                <a 
                  href="#latest-tutorials" 
                  className="btn btn-hero btn-hero-secondary btn-lg px-4 py-3 fw-bold"
                >
                  Learn a Skill
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;