import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import DealsSection from '../components/DealsSection';
import Footer from '../components/Footer';

const Home = () => {
  // Product data for different sections
  const homeProducts = [
    { name: 'Soft chairs', price: 'USD 19', image: 'https://via.placeholder.com/150x150/8B4513/ffffff?text=Chair' },
    { name: 'Sofa & chair', price: 'USD 19', image: 'https://via.placeholder.com/150x150/654321/ffffff?text=Sofa' },
    { name: 'Kitchen dishes', price: 'USD 19', image: 'https://via.placeholder.com/150x150/FF6347/ffffff?text=Dishes' },
    { name: 'Smart watches', price: 'USD 19', image: 'https://via.placeholder.com/150x150/0066cc/ffffff?text=Watch' }
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: 'USD 10', image: 'https://via.placeholder.com/120x120/0066cc/ffffff?text=Watch' },
    { name: 'Cameras', price: 'USD 10', image: 'https://via.placeholder.com/120x120/333333/ffffff?text=Camera' },
    { name: 'Headphones', price: 'USD 10', image: 'https://via.placeholder.com/120x120/0099cc/ffffff?text=Headphones' },
    { name: 'Smart watches', price: 'USD 240', image: 'https://via.placeholder.com/120x120/000000/ffffff?text=Watch' },
    { name: 'Gaming set', price: 'USD 35', image: 'https://via.placeholder.com/120x120/FF0000/ffffff?text=Gaming' },
    { name: 'Laptops & PC', price: 'USD 340', image: 'https://via.placeholder.com/120x120/666666/ffffff?text=Laptop' },
    { name: 'Smartphones', price: 'USD 19', image: 'https://via.placeholder.com/120x120/00AA00/ffffff?text=Phone' },
    { name: 'Electric kettle', price: 'USD 240', image: 'https://via.placeholder.com/120x120/FF4500/ffffff?text=Kettle' }
  ];

  const recommendedProducts = [
    { id: 1, name: 'T-shirts with multiple colors, for men', price: '$10.30', image: 'https://via.placeholder.com/200x200/4169E1/ffffff?text=T-Shirt' },
    { id: 2, name: 'Jeans shorts for men blue color', price: '$10.30', image: 'https://via.placeholder.com/200x200/1E90FF/ffffff?text=Jeans' },
    { id: 3, name: 'Brown winter coat medium size', price: '$12.50', image: 'https://via.placeholder.com/200x200/8B4513/ffffff?text=Coat' },
    { id: 4, name: 'Jeans bag for travel for men', price: '$34.00', image: 'https://via.placeholder.com/200x200/000080/ffffff?text=Bag' },
    { id: 5, name: 'Leather wallet', price: '$99.00', image: 'https://via.placeholder.com/200x200/654321/ffffff?text=Wallet' }
  ];

  // Additional products for the new section
  const additionalProducts = [
    { id: 1, name: 'Canvas Denim Jeans- Top-quality', price: '$9.99', image: 'https://via.placeholder.com/150x150/1E90FF/ffffff?text=Jeans' },
    { id: 2, name: 'Headset for gaming with mic', price: '$8.99', image: 'https://via.placeholder.com/150x150/0099cc/ffffff?text=Headset' },
    { id: 3, name: 'Smartwatch, Waterproof with chest strap', price: '$10.30', image: 'https://via.placeholder.com/150x150/0066cc/ffffff?text=Watch' },
    { id: 4, name: 'Pot water for men leather multicolour', price: '$10.30', image: 'https://via.placeholder.com/150x150/8B4513/ffffff?text=Pot' },
    { id: 5, name: 'Spray bag for travel for men', price: '$80.95', image: 'https://via.placeholder.com/150x150/000080/ffffff?text=Bag' }
  ];

  // Services data
  const services = [
    {
      title: 'Source from Industry Hubs',
      image: 'https://via.placeholder.com/250x150/F4A460/ffffff?text=Industry+Hubs',
      icon: '📋'
    },
    {
      title: 'Customize Your Products',
      image: 'https://via.placeholder.com/250x150/4682B4/ffffff?text=Customize',
      icon: '🎨'
    },
    {
      title: 'Fast, reliable shipping by ocean or air',
      image: 'https://via.placeholder.com/250x150/708090/ffffff?text=Shipping',
      icon: '✈️'
    },
    {
      title: 'Product monitoring and inspection',
      image: 'https://via.placeholder.com/250x150/BC8F8F/ffffff?text=Inspection',
      icon: '🔍'
    }
  ];

  // Suppliers by region data
  const supplierRegions = [
    { country: 'Arabic Emirates', flag: '🇦🇪' },
    { country: 'Australia', flag: '🇦🇺' },
    { country: 'United States', flag: '🇺🇸' },
    { country: 'Russia', flag: '🇷🇺' },
    { country: 'Italy', flag: '🇮🇹' },
    { country: 'Denmark', flag: '🇩🇰' },
    { country: 'France', flag: '🇫🇷' },
    { country: 'Arabic Emirates', flag: '🇦🇪' },
    { country: 'China', flag: '🇨🇳' },
    { country: 'Great Britain', flag: '🇬🇧' }
  ];

  return (
    <div className="min-vh-100 bg-light" style={{overflowX: 'hidden'}}>
      <Header />
      <HeroBanner />
      <DealsSection />
      
      {/* Home and Outdoor Section */}
      <section className="py-2 py-sm-3 py-md-4">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <div className="row g-1 g-sm-2 g-md-3">
            <div className="col-12 col-lg-3 mb-2 mb-lg-0">
              <div className="bg-warning bg-opacity-25 rounded p-2 p-sm-3 p-md-4 h-100 text-center text-lg-start">
                <h4 className="mb-1 mb-sm-2 mb-md-3" style={{fontSize: '14px', fontWeight: '600'}} >Home and outdoor</h4>
                <button className="btn btn-outline-dark" style={{fontSize: '11px', padding: '4px 8px'}}>Source now</button>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row g-1 g-sm-2 g-md-3">
                {homeProducts.map((product, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-3">
                    <div className="card text-center h-100" style={{minHeight: '120px'}}>
                      <img 
                        src={product.image} 
                        className="card-img-top" 
                        alt={product.name}
                        style={{height: '60px', objectFit: 'cover'}}
                      />
                      <div className="card-body p-1" style={{fontSize: '10px'}}>
                        <p className="card-text mb-1" style={{fontSize: '9px', lineHeight: '1.1'}}>{product.name}</p>
                        <div className="text-muted" style={{fontSize: '8px'}}>From</div>
                        <div className="fw-bold" style={{fontSize: '10px'}}>{product.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Electronics Section */}
      <section className="py-2 py-sm-3 py-md-4">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <div className="row g-1 g-sm-2 g-md-3">
            <div className="col-12 col-lg-3 mb-2 mb-lg-0">
              <div className="bg-info bg-opacity-25 rounded p-2 p-sm-3 p-md-4 h-100 text-center text-lg-start">
                <h4 className="mb-1 mb-sm-2 mb-md-3" style={{fontSize: '14px', fontWeight: '600'}}>Consumer electronics and gadgets</h4>
                <button className="btn btn-outline-dark" style={{fontSize: '11px', padding: '4px 8px'}}>Source now</button>
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row g-1 g-sm-1 g-md-2">
                {electronicsProducts.map((product, index) => (
                  <div key={index} className="col-6 col-sm-4 col-md-3">
                    <div className="card text-center h-100" style={{minHeight: '100px'}}>
                      <img 
                        src={product.image} 
                        className="card-img-top" 
                        alt={product.name}
                        style={{height: '50px', objectFit: 'cover'}}
                      />
                      <div className="card-body p-1">
                        <p className="card-text mb-1" style={{fontSize: '8px', lineHeight: '1.1'}}>{product.name}</p>
                        <div className="text-muted" style={{fontSize: '7px'}}>From</div>
                        <div className="fw-bold" style={{fontSize: '9px'}}>{product.price}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section className="py-2 py-sm-3 py-md-5">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <div 
            className="rounded p-2 p-sm-3 p-md-5 text-white"
            style={{
              background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
              minHeight: 'auto'
            }}
          >
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 mb-2 mb-lg-0">
                <h2 className="mb-1 mb-sm-2 mb-md-3" style={{fontSize: '16px', fontWeight: '600'}}>An easy way to send requests to all suppliers</h2>
                <p className="mb-0" style={{fontSize: '11px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
              <div className="col-12 col-lg-6">
                <div className="bg-white rounded p-2 p-sm-3 p-md-4">
                  <h5 className="text-dark mb-2 mb-sm-3" style={{fontSize: '14px', fontWeight: '600'}}>Send quote to suppliers</h5>
                  <form>
                    <div className="mb-2">
                      <label className="form-label text-dark" style={{fontSize: '11px', marginBottom: '2px'}}>What item you need?</label>
                      <textarea 
                        className="form-control" 
                        rows="2" 
                        placeholder="Type more details"
                        style={{fontSize: '11px', padding: '4px 8px'}}
                      ></textarea>
                    </div>
                    <div className="row mb-2">
                      <div className="col-6">
                        <label className="form-label text-dark" style={{fontSize: '11px', marginBottom: '2px'}}>Quantity</label>
                        <input type="number" className="form-control" defaultValue="1" style={{fontSize: '11px', padding: '4px 8px'}} />
                      </div>
                      <div className="col-6">
                        <label className="form-label text-dark" style={{fontSize: '11px', marginBottom: '2px'}}>Unit</label>
                        <select className="form-select" style={{fontSize: '11px', padding: '4px 8px'}}>
                          <option>Pcs</option>
                          <option>Kg</option>
                          <option>Set</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{fontSize: '12px', padding: '6px'}}>Send inquiry</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Items */}
      <section className="py-2 py-sm-3 py-md-4">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <h3 className="mb-2 mb-sm-3 mb-md-4" style={{fontSize: '16px', fontWeight: '600'}}>Recommended items</h3>
          <div className="row g-1 g-sm-2 g-md-3">
            {recommendedProducts.map((product) => (
              <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{height: '80px', objectFit: 'cover'}}
                  />
                  <div className="card-body p-1 p-sm-2">
                    <h6 className="card-title mb-1" style={{fontSize: '9px', lineHeight: '1.2', fontWeight: '500'}}>{product.name}</h6>
                    <div className="fw-bold text-primary" style={{fontSize: '10px'}}>{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Section - from the image */}
      <section className="py-2 py-sm-3 py-md-4">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <div className="row g-1 g-sm-2 g-md-3">
            {additionalProducts.map((product) => (
              <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="card h-100">
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{height: '80px', objectFit: 'cover'}}
                  />
                  <div className="card-body p-1 p-sm-2">
                    <h6 className="card-title mb-1" style={{fontSize: '9px', lineHeight: '1.2', fontWeight: '500'}}>{product.name}</h6>
                    <div className="fw-bold text-primary" style={{fontSize: '10px'}}>{product.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Extra Services Section */}
      <section className="py-2 py-sm-3 py-md-5">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <h3 className="mb-2 mb-sm-3 mb-md-4" style={{fontSize: '16px', fontWeight: '600'}}>Our extra services</h3>
          <div className="row g-1 g-sm-2 g-md-3">
            {services.map((service, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="card h-100">
                  <div className="position-relative">
                    <img 
                      src={service.image} 
                      className="card-img-top" 
                      alt={service.title}
                      style={{height: '80px', objectFit: 'cover'}}
                    />
                    <div 
                      className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{width: '25px', height: '25px'}}
                    >
                      <span style={{fontSize: '12px'}}>{service.icon}</span>
                    </div>
                  </div>
                  <div className="card-body text-center p-1">
                    <h6 className="card-title mb-0" style={{fontSize: '9px', lineHeight: '1.2', fontWeight: '500'}}>{service.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers by Region Section */}
      <section className="py-2 py-sm-3 py-md-5">
        <div className="container-fluid" style={{paddingLeft: '8px', paddingRight: '8px'}}>
          <h3 className="mb-2 mb-sm-3 mb-md-4" style={{fontSize: '16px', fontWeight: '600'}}>Suppliers by region</h3>
          <div className="row g-1 g-sm-2 g-md-3">
            {supplierRegions.map((supplier, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="d-flex align-items-center border rounded bg-white h-100" style={{padding: '4px 6px', minHeight: '35px'}}>
                  <span className="me-1 flex-shrink-0" style={{fontSize: '14px'}}>{supplier.flag}</span>
                  <small className="text-muted" style={{fontSize: '9px', lineHeight: '1.2'}}>{supplier.country}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;