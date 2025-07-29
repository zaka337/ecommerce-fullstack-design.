import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import DealsSection from '../components/DealsSection';
import Footer from '../components/Footer';

const Home = () => {
  // Product data for different sections
  // Ensure these image paths are correct relative to your project's root or public folder.
  const homeProducts = [
    { name: 'Soft chairs', price: 'USD 19', image: './interior/1.jpg' },
    { name: 'Sofa & chair', price: 'USD 19', image: './interior/2.jpg' },
    { name: 'Kitchen dishes', price: 'USD 19', image: './interior/9.jpg' },
    { name: 'Smart watches', price: 'USD 19', image: './tech/8.jpg' }
  ];

  const electronicsProducts = [
    { name: 'Smart watches', price: 'USD 10', image: './tech/8.jpg' },
    { name: 'Cameras', price: 'USD 10', image: './tech/6.jpg' },
    { name: 'Headphones', price: 'USD 10', image: './tech/9.jpg' },
    { name: 'Smart watches', price: 'USD 240', image: './tech/8.jpg' },
    { name: 'Gaming set', price: 'USD 35', image: './tech/5.jpg' },
    { name: 'Laptops & PC', price: 'USD 340', image: './tech/7.jpg' },
    { name: 'Smartphones', price: 'USD 19', image: './tech/1.jpg' },
    { name: 'Electric kettle', price: 'USD 240', image: './tech/10.jpg' }
  ];

  const recommendedProducts = [
    { id: 1, name: 'T-shirts with multiple colors, for men', price: '$10.30', image: './cloth/1.jpg' },
    { id: 2, name: 'Jeans shorts for men blue color', price: '$10.30', image: './cloth/4.jpg' },
    { id: 3, name: 'Brown winter coat medium size', price: '$12.50', image: './cloth/3.jpg' },
    { id: 4, name: 'Jeans bag for travel for men', price: '$34.00', image: './cloth/5.jpg' },
    { id: 5, name: 'Leather wallet', price: '$99.00', image: './cloth/6.jpg' }
  ];

  // Additional products for the new section
  const additionalProducts = [
    { id: 1, name: 'Canvas Denim Jeans- Top-quality', price: '$9.99', image: './cloth/7.jpg'},
    { id: 2, name: 'Headset for gaming with mic', price: '$8.99', image: './tech/5.jpg' },
    { id: 3, name: 'Smartwatch, Waterproof with chest strap', price: '$10.30', image: './tech/8.jpg' },
    { id: 4, name: 'Pot water for men leather multicolour', price: '$10.30', image: './tech/10.jpg' },
    { id: 5, name: 'Spray bag for travel for men', price: '$80.95', image: './cloth/5.jpg' }
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
  // Updated all flags to use image paths for consistency and better display control.
  // Replace the 'https://placehold.co' URLs with your actual flag image paths (e.g., './flags/AU.png').
  const supplierRegions = [
    { country: 'Arabic Emirates', flag: './flags/AE.png' }, // Original path kept
    { country: 'Australia', flag: 'https://placehold.co/24x18/cccccc/000?text=AU' }, // Placeholder, replace with actual path
    { country: 'United States', flag: 'https://placehold.co/24x18/cccccc/000?text=US' }, // Placeholder, replace with actual path
    { country: 'Russia', flag: 'https://placehold.co/24x18/cccccc/000?text=RU' }, // Placeholder, replace with actual path
    { country: 'Italy', flag: 'https://placehold.co/24x18/cccccc/000?text=IT' }, // Placeholder, replace with actual path
    { country: 'Denmark', flag: 'https://placehold.co/24x18/cccccc/000?text=DK' }, // Placeholder, replace with actual path
    { country: 'France', flag: 'https://placehold.co/24x18/cccccc/000?text=FR' }, // Placeholder, replace with actual path
    { country: 'China', flag: 'https://placehold.co/24x18/cccccc/000?text=CN' }, // Placeholder, replace with actual path
    { country: 'Great Britain', flag: 'https://placehold.co/24x18/cccccc/000?text=GB' } // Placeholder, replace with actual path
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
                      {/* Further increased height for home product images */}
                      <img 
                        src={product.image} 
                        className="card-img-top" 
                        alt={product.name}
                        style={{height: '140px', objectFit: 'cover'}} // Increased from 100px
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
                      {/* Further increased height for electronics product images */}
                      <img 
                        src={product.image} 
                        className="card-img-top" 
                        alt={product.name}
                        style={{height: '120px', objectFit: 'cover'}} // Increased from 90px
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
                  {/* Further increased height for recommended product images */}
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{height: '160px', objectFit: 'cover'}} // Increased from 120px
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
                  {/* Further increased height for additional product images */}
                  <img 
                    src={product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    style={{height: '160px', objectFit: 'cover'}} // Increased from 120px
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
                    {/* Further increased height for service images */}
                    <img 
                      src={service.image} 
                      className="card-img-top" 
                      alt={service.title}
                      style={{height: '180px', objectFit: 'cover'}} // Increased from 150px
                    />
                    <div 
                      className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{width: '35px', height: '35px'}} /* Slightly larger icon circle for visibility */
                    >
                      <span style={{fontSize: '16px'}}>{service.icon}</span> {/* Larger icon size */}
                    </div>
                  </div>
                  <div className="card-body text-center p-1">
                    <h6 className="card-title mb-0" style={{fontSize: '11px', lineHeight: '1.2', fontWeight: '500'}}>{service.title}</h6> {/* Larger font size for service title */}
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
                <div className="d-flex align-items-center border rounded bg-white h-100" style={{padding: '6px 8px', minHeight: '45px'}}> {/* Adjusted padding and minHeight */}
                  <img 
                    src={supplier.flag} 
                    alt={`${supplier.country} flag`} 
                    className="me-2 flex-shrink-0 rounded" // Added rounded for flags
                    style={{ width: '28px', height: '20px', objectFit: 'cover' }} // Specific size for flag images
                    // Add onerror if you want to handle broken image links with a fallback
                    // onerror="this.onerror=null;this.src='https://placehold.co/24x18/cccccc/000?text=NF';" 
                  />
                  <small className="text-muted" style={{fontSize: '10px', lineHeight: '1.2'}}>{supplier.country}</small> {/* Adjusted font size */}
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
