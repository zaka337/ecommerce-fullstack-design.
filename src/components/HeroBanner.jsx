import React from 'react';

const HeroBanner = () => {
  const categories = [
    'Automobiles', 
    'Clothes and wear', 
    'Home interiors', 
    'Computer and tech',
    'Tools, equipments', 
    'Sports and outdoor', 
    'Animal and pets', 
    'Machinery tools', 
    'More category'
  ];

  return (
    <section className="bg-light py-4">
      <div className="container-fluid">
        <div className="row">
          {/* Left Sidebar - Categories */}
          <div className="col-md-2">
            <div className="bg-white rounded p-3">
              <ul className="list-unstyled mb-0">
                {categories.map((category, index) => (
                  <li key={index} className="py-2 border-bottom">
                    <a href="#" className="text-decoration-none text-dark">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Hero Banner */}
          <div className="col-md-7">
            <div 
              className="rounded p-5 position-relative overflow-hidden text-white"
              style={{
                minHeight: '350px',
                background: 'linear-gradient(135deg, #a8e6cf 0%, #88d8c0 100%)',
                backgroundImage: 'url("/api/placeholder/400/300")',
                backgroundSize: 'cover',
                backgroundPosition: 'right center'
              }}
            >
              <div className="position-relative z-1">
                <h2 className="display-6 fw-bold text-dark mb-2">Latest trending</h2>
                <h1 className="display-5 fw-bold text-dark mb-4">Electronic items</h1>
                <button className="btn btn-light px-4 py-2">Learn more</button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - User Actions */}
          <div className="col-md-3">
            <div className="d-flex flex-column gap-3">
              {/* User Welcome Card */}
              <div className="bg-primary bg-opacity-10 rounded p-3">
                <div className="d-flex align-items-center mb-3">
                  <div 
                    className="bg-secondary rounded-circle me-2 d-flex align-items-center justify-content-center"
                    style={{width: '40px', height: '40px'}}
                  >
                    <span className="text-white">👤</span>
                  </div>
                  <div>
                    <div className="text-muted small">Hi, user</div>
                    <div className="text-muted small">let's get started</div>
                  </div>
                </div>
                <button className="btn btn-primary w-100 mb-2">Join now</button>
                <button className="btn btn-link w-100 p-0 text-primary">Log in</button>
              </div>

              {/* Special Offers */}
              <div className="bg-warning bg-opacity-25 rounded p-3">
                <div className="fw-bold">Get US $10 off</div>
                <div className="text-muted small">with a new supplier</div>
              </div>

              <div className="bg-info bg-opacity-25 rounded p-3">
                <div className="fw-bold">Send quotes with</div>
                <div className="text-muted small">supplier preferences</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;