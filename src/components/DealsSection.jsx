import React from 'react';

const DealsSection = () => {
  const dealProducts = [
    { 
      id: 1, 
      name: 'Smart watches', 
      price: 99, 
      originalPrice: 132, 
      discount: 25, 
      image: 'https://via.placeholder.com/200x200/0066cc/ffffff?text=Watch'
    },
    { 
      id: 2, 
      name: 'Laptops', 
      price: 799, 
      originalPrice: 940, 
      discount: 15, 
      image: 'https://via.placeholder.com/200x200/333333/ffffff?text=Laptop'
    },
    { 
      id: 3, 
      name: 'GoPro cameras', 
      price: 299, 
      originalPrice: 498, 
      discount: 40, 
      image: 'https://via.placeholder.com/200x200/ff6600/ffffff?text=Camera'
    },
    { 
      id: 4, 
      name: 'Headphones', 
      price: 159, 
      originalPrice: 212, 
      discount: 25, 
      image: 'https://via.placeholder.com/200x200/0099cc/ffffff?text=Headphones'
    },
    { 
      id: 5, 
      name: 'Canon cameras', 
      price: 699, 
      originalPrice: 932, 
      discount: 25, 
      image: 'https://via.placeholder.com/200x200/990099/ffffff?text=Canon'
    }
  ];

  return (
    <section className="py-5">
      <div className="container-fluid">
        <div className="row">
          {/* Deals Timer */}
          <div className="col-md-2">
            <div className="bg-white rounded p-4 text-center">
              <h5 className="mb-3">Deals and offers</h5>
              <p className="text-muted small mb-3">Hygiene equipments</p>
              
              {/* Countdown Timer */}
              <div className="row g-1 mb-3">
                <div className="col-3">
                  <div className="bg-dark text-white rounded p-1">
                    <div className="fw-bold">04</div>
                    <div className="small">Days</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bg-dark text-white rounded p-1">
                    <div className="fw-bold">13</div>
                    <div className="small">Hour</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bg-dark text-white rounded p-1">
                    <div className="fw-bold">34</div>
                    <div className="small">Min</div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bg-dark text-white rounded p-1">
                    <div className="fw-bold">56</div>
                    <div className="small">Sec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deal Products */}
          <div className="col-md-10">
            <div className="row g-3">
              {dealProducts.map((product) => (
                <div key={product.id} className="col-md-2 col-6">
                  <div className="card h-100 position-relative">
                    {/* Discount Badge */}
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-danger">-{product.discount}%</span>
                    </div>
                    
                    <img 
                      src={product.image} 
                      className="card-img-top" 
                      alt={product.name}
                      style={{height: '150px', objectFit: 'cover'}}
                    />
                    
                    <div className="card-body text-center">
                      <h6 className="card-title">{product.name}</h6>
                      <div className="mb-2">
                        <span className="text-decoration-line-through text-muted small">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <div className="fw-bold text-danger">
                        ${product.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;