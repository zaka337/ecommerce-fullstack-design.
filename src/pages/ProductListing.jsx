import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Keep this import for linking to product details
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart, Star, Grid, List } from 'lucide-react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'

  const products = [
    {
      id: 1,
      name: 'Canon EOS R5 DSLR Black 45.5mm',
      price: '$999.00',
      originalPrice: '$1,128.00',
      rating: 4.5,
      reviews: 154,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/FF0000/ffffff?text=Canon+R5',
      description: 'Canon 1lxl sdfgh aerol. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      id: 2,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: '$599.00',
      originalPrice: '$699.00',
      rating: 4.7,
      reviews: 98,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/000000/ffffff?text=GoPro+8',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.'
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4 Noise Cancelling Headphones',
      price: '$349.00',
      originalPrice: '$399.00',
      rating: 4.9,
      reviews: 210,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/333333/ffffff?text=Sony+XM4',
      description: 'Experience industry-leading noise cancellation and amazing sound quality with the Sony WH-1000XM4.'
    },
    {
      id: 4,
      name: 'Apple MacBook Air M1 Chip (13-inch)',
      price: '$999.00',
      originalPrice: '$1,199.00',
      rating: 4.8,
      reviews: 203,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/FF6600/ffffff?text=MacBook+Air',
      description: 'The Apple MacBook Air with the M1 chip delivers incredible performance and all-day battery life.'
    },
    {
      id: 5,
      name: 'Samsung Galaxy Watch 4 Classic',
      price: '$299.00',
      originalPrice: '$349.00',
      rating: 4.0,
      reviews: 89,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/666666/ffffff?text=Galaxy+Watch',
      description: 'Track your fitness, receive notifications, and make payments from your wrist with the Galaxy Watch 4 Classic.'
    },
    {
      id: 6,
      name: 'JBL Flip 6 Portable Bluetooth Speaker',
      price: '$129.00',
      originalPrice: '$149.00',
      rating: 4.3,
      reviews: 125,
      shipping: 'Free Shipping',
      image: 'https://via.placeholder.com/250x250/CCCCCC/000000?text=JBL+Flip',
      description: 'Powerful sound on the go with the rugged and waterproof JBL Flip 6 speaker.'
    }
  ];

  const categories = [
    'Mobile accessory',
    'Electronics',
    'Smartphones',
    'Modern tech'
  ];

  const brands = [
    'Samsung',
    'Apple',
    'Huawei',
    'Pocco',
    'Lenovo'
  ];

  const features = [
    'Metallic',
    'Plastic cover',
    '8GB Ram',
    'Super power',
    'Large memory'
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'text-warning fill-warning' : 'text-muted'}
      />
    ));
  };

  return (
    <div className="min-vh-100 bg-light">
      <Header />

      {/* Breadcrumb - using React Bootstrap's Breadcrumb for consistency */}
      <div className="bg-light py-2" style={{ borderBottom: '1px solid #dee2e6' }}>
        <Container fluid>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-muted">Home</Link> {/* Use Link for Home */}
              </li>
              <li className="breadcrumb-item active text-muted">Products</li>
            </ol>
          </nav>
        </Container>
      </div>

      <Container fluid className="py-4">
        <Row>
          {/* Left Sidebar - Filters */}
          <Col xs={12} md={3} className="d-none d-md-block">
            <div className="bg-white rounded p-4 mb-4 shadow-sm">
              {/* Category Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Category</h6>
                <ul className="list-unstyled">
                  {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={`cat-${index}`} />
                        <label className="form-check-label small" htmlFor={`cat-${index}`}>
                          {category}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Brands</h6>
                <ul className="list-unstyled">
                  {brands.map((brand, index) => (
                    <li key={index} className="mb-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={`brand-${index}`} />
                        <label className="form-check-label small" htmlFor={`brand-${index}`}>
                          {brand}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Filter */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Features</h6>
                <ul className="list-unstyled">
                  {features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id={`feature-${index}`} />
                        <label className="form-check-label small" htmlFor={`feature-${index}`}>
                          {feature}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Price range</h6>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <input type="number" className="form-control form-control-sm" placeholder="Min" />
                  </div>
                  <div className="col-6">
                    <input type="number" className="form-control form-control-sm" placeholder="Max" />
                  </div>
                </div>
                <button className="btn btn-outline-primary btn-sm w-100">Apply</button>
              </div>

              {/* Condition */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Condition</h6>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="condition" id="any" />
                  <label className="form-check-label small" htmlFor="any">Any</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="condition" id="refurbished" />
                  <label className="form-check-label small" htmlFor="refurbished">Refurbished</label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="condition" id="brand-new" />
                  <label className="form-check-label small" htmlFor="brand-new">Brand new</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="condition" id="old-items" />
                  <label className="form-check-label small" htmlFor="old-items">Old items</label>
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-4">
                <h6 className="fw-bold mb-3">Ratings</h6>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="form-check mb-2">
                    <input className="form-check-input" type="checkbox" id={`rating-${rating}`} />
                    <label className="form-check-label small d-flex align-items-center" htmlFor={`rating-${rating}`}>
                      <div className="d-flex me-2">
                        {renderStars(rating)}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          {/* Main Content - Products Display */}
          <Col xs={12} md={9}>
            {/* Top Bar with View Toggle and Sort */}
            <div className="bg-white rounded p-3 mb-4 shadow-sm">
              <Row className="align-items-center flex-column flex-sm-row g-2">
                <Col xs={12} sm={6}>
                  <p className="mb-0 text-muted text-center text-sm-start small">
                    <strong>{products.length} items</strong> in <strong>Mobile accessory</strong>
                  </p>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="d-flex justify-content-center justify-content-sm-end align-items-center gap-3 flex-wrap">
                    {/* View Toggle Buttons */}
                    <div className="btn-group" role="group" aria-label="View Toggle">
                      <Button
                        variant={viewMode === 'grid' ? 'primary' : 'outline-secondary'}
                        onClick={() => setViewMode('grid')}
                        className="d-flex align-items-center p-2"
                      >
                        <Grid size={16} />
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'primary' : 'outline-secondary'}
                        onClick={() => setViewMode('list')}
                        className="d-flex align-items-center p-2"
                      >
                        <List size={16} />
                      </Button>
                    </div>
                    {/* Sort Dropdown */}
                    <select className="form-select form-select-sm" style={{ width: 'auto', minWidth: '120px' }}>
                      <option>Featured</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                  </div>
                </Col>
              </Row>
            </div>

            {/* Products Display Area */}
            <Row className="g-3"> {/* Changed from div to Row */}
              {products.map((product) => (
                <Col
                  key={product.id}
                  xs={viewMode === 'grid' ? 6 : 12}
                  sm={viewMode === 'grid' ? 4 : 12}
                  md={viewMode === 'grid' ? 4 : 12}
                  lg={viewMode === 'grid' ? 3 : 12}
                >
                  {viewMode === 'list' ? (
                    // List View Product Card
                    <Card className="mb-3 shadow-sm">
                      <Row className="g-0 flex-column flex-sm-row align-items-center">
                        <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center p-3">
                          <Link to={`/product/${product.id}`} className="text-decoration-none"> {/* Link the image */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-fluid rounded"
                              style={{ maxWidth: '150px', maxHeight: '150px', objectFit: 'contain' }}
                            />
                          </Link>
                        </Col>
                        <Col xs={12} sm={5}>
                          <Card.Body>
                            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark"> {/* Link the title */}
                              <h6 className="card-title mb-2 text-truncate small">{product.name}</h6>
                            </Link>
                            <div className="d-flex align-items-center mb-2">
                              <div className="d-flex me-2">
                                {renderStars(product.rating)}
                              </div>
                              <span className="text-muted small">({product.reviews} reviews)</span>
                            </div>
                            <div className="mb-2">
                              <span className="badge bg-success small">{product.shipping}</span>
                            </div>
                            <p className="text-muted small mb-0 d-none d-sm-block">{product.description}</p>
                            {/* Changed <a> to <Link> for "View details" */}
                            <Link to={`/product/${product.id}`} className="text-primary small text-decoration-none">View details</Link>
                          </Card.Body>
                        </Col>
                        <Col xs={12} sm={3} className="text-center text-sm-end p-3">
                          <div className="mb-2 d-inline-block d-sm-block me-2 me-sm-0">
                            <Heart size={20} className="text-muted" />
                          </div>
                          <div className="mb-2 d-inline-block d-sm-block me-2 me-sm-0">
                            <span className="text-decoration-line-through text-muted small">
                              {product.originalPrice}
                            </span>
                          </div>
                          <div className="fs-5 fw-bold text-danger mb-3">
                            {product.price}
                          </div>
                          <Button variant="primary" size="sm" className="w-100 w-sm-auto">Add to cart</Button>
                        </Col>
                      </Row>
                    </Card>
                  ) : (
                    // Grid View Product Card
                    <Card className="h-100 shadow-sm text-center">
                      {/* Wrap the entire card content (except the Add to cart button) with Link */}
                      <Link to={`/product/${product.id}`} className="text-decoration-none text-dark d-flex flex-column h-100">
                        <div className="d-flex justify-content-center align-items-center p-3" style={{ height: '180px' }}>
                          <Card.Img
                            variant="top"
                            src={product.image}
                            alt={product.name}
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          />
                        </div>
                        <Card.Body className="d-flex flex-column">
                          <h6 className="card-title mb-2 text-truncate small">{product.name}</h6>
                          <div className="d-flex justify-content-center align-items-center mb-2">
                            {renderStars(product.rating)}
                            <span className="text-muted small ms-1">({product.reviews})</span>
                          </div>
                          <p className="fs-5 fw-bold text-danger mb-2">{product.price}</p>
                          <p className="text-decoration-line-through text-muted small mb-3">{product.originalPrice}</p>
                        </Card.Body>
                      </Link>
                      {/* Add to cart button is outside the link for direct action */}
                      <Button variant="primary" size="sm" className="mt-auto w-100">Add to cart</Button>
                    </Card>
                  )}
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">Show 10</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">4</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">5</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">→</a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ProductListing;