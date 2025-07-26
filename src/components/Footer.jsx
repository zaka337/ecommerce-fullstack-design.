import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        {/* Newsletter Section */}
        <div className="text-center mb-5 px-3">
          <h5 className="fw-semibold mb-2">Subscribe on our newsletter</h5>
          <p className="text-muted mb-4">Get daily news on upcoming offers from many suppliers all over the world</p>
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6">
              <div className="input-group flex-column flex-sm-row">
                <input 
                  type="email" 
                  className="form-control mb-2 mb-sm-0" 
                  placeholder="Email" 
                  aria-label="Email"
                />
                <button className="btn btn-primary px-4" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row g-4 flex-wrap">
          {/* Brand Section */}
          <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="d-flex flex-column flex-lg-row align-items-start mb-3">
              <div className="bg-primary text-white rounded-2 p-2 me-3 mb-2 mb-lg-0">
                <i className="fas fa-cube fs-5"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Brand</h6>
                <small className="text-muted">
                  Best information about the company gies lorem ipsum dolor sit amet, consectetur adipiscing elit
                </small>
              </div>
            </div>
            {/* Social Icons */}
            <div className="d-flex gap-2 flex-wrap">
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-secondary btn-sm rounded-circle p-2">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Other Columns */}
          {["About", "Partnership", "Information", "For users"].map((title, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-2 mb-4 mb-lg-0">
              <h6 className="fw-semibold mb-3">{title}</h6>
              <ul className="list-unstyled small">
                <li><a href="#" className="text-muted text-decoration-none">Sample Link 1</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Sample Link 2</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Sample Link 3</a></li>
                <li><a href="#" className="text-muted text-decoration-none">Sample Link 4</a></li>
              </ul>
            </div>
          ))}

          {/* Get App Column */}
          <div className="col-12 col-md-6 col-lg-1 mb-4 mb-lg-0">
            <h6 className="fw-semibold mb-3">Get app</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="btn btn-dark btn-sm py-1 px-2" style={{ fontSize: '11px' }}>
                <i className="fab fa-apple me-1"></i>
                App Store
              </a>
              <a href="#" className="btn btn-dark btn-sm py-1 px-2" style={{ fontSize: '11px' }}>
                <i className="fab fa-google-play me-1"></i>
                Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row mt-5 pt-4 border-top flex-column flex-md-row align-items-center justify-content-between px-3">
          <div className="mb-2 mb-md-0">
            <small className="text-muted">© 2023 Ecommerce</small>
          </div>
          <div className="d-flex align-items-center gap-2">
            <small className="text-muted">English</small>
            <img src="/api/placeholder/20/15" alt="Flag" className="rounded-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;