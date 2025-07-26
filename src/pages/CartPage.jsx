import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header'; // Adjust path if necessary
import Footer from '../components/Footer'; // Adjust path if necessary
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Heart } from 'lucide-react'; // Assuming you might want a heart icon for "Save for later"

const CartPage = () => {
  // Dummy cart items for demonstration purposes, replace with actual state/context later
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best Factory LLC',
      price: 78.99,
      qty: 1,
      image: 'https://via.placeholder.com/80x80/28a745/ffffff?text=T-Shirt' // Example image
    },
    {
      id: 2,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Best Factory LLC',
      price: 39.00,
      qty: 3,
      image: 'https://via.placeholder.com/80x80/dc3545/ffffff?text=T-Shirt' // Example image
    },
    {
      id: 3,
      name: 'T-shirts with multiple colors, for men and lady',
      size: 'medium',
      color: 'blue',
      material: 'Plastic',
      seller: 'Aritel Market',
      price: 170.50,
      qty: 1,
      image: 'https://via.placeholder.com/80x80/17a2b8/ffffff?text=T-Shirt' // Example image
    }
  ]);

  // Dummy "Saved for later" items
  const savedForLaterItems = [
    {
      id: 7,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      image: 'https://via.placeholder.com/100x100/6c757d/ffffff?text=GoPro'
    },
    {
      id: 8,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      image: 'https://via.placeholder.com/100x100/6c757d/ffffff?text=GoPro'
    },
    {
      id: 9,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      image: 'https://via.placeholder.com/100x100/6c757d/ffffff?text=GoPro'
    },
    {
      id: 10,
      name: 'GoPro HERO8 4K Action Camera - Black',
      price: 99.50,
      image: 'https://via.placeholder.com/100x100/6c757d/ffffff?text=GoPro'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 90.00; // Example discount
  const tax = 14.00;     // Example tax
  const total = subtotal - discount + tax;

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id, newQty) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: parseInt(newQty) } : item
    ));
  };

  return (
    <div className="min-vh-100 bg-light">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-light py-2" style={{ borderBottom: '1px solid #dee2e6' }}>
        <Container fluid>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-decoration-none text-muted">Home</Link>
              </li>
              <li className="breadcrumb-item active text-muted">My cart</li>
            </ol>
          </nav>
        </Container>
      </div>

      <Container fluid className="py-4">
        <h4 className="mb-4">My cart ({cartItems.length})</h4>

        <Row className="g-4">
          {/* Left Column - Cart Items */}
          <Col lg={9}>
            <Card className="shadow-sm mb-4">
              <Card.Body className="p-0"> {/* Remove default padding to control rows better */}
                {cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <Row key={item.id} className="g-0 align-items-center border-bottom p-3">
                      <Col xs={12} md={6} className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="img-fluid rounded me-3"
                          style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <p className="text-muted small mb-1">
                            Size: {item.size}, Color: {item.color}, Material: {item.material}
                          </p>
                          <p className="text-muted small mb-0">Seller: {item.seller}</p>
                        </div>
                      </Col>
                      <Col xs={6} md={2} className="text-md-center mb-3 mb-md-0">
                        <span className="fw-bold d-block d-md-none text-muted">Price: </span>
                        <h6 className="mb-0">${item.price.toFixed(2)}</h6>
                      </Col>
                      <Col xs={6} md={2} className="mb-3 mb-md-0">
                        <Form.Control
                          type="number"
                          value={item.qty}
                          min="1"
                          onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                          className="form-control-sm text-center"
                          style={{ width: '70px', margin: 'auto' }}
                        />
                      </Col>
                      <Col xs={12} md={2} className="text-end">
                        <Button variant="link" size="sm" className="text-danger p-0" onClick={() => handleRemoveItem(item.id)}>
                          Remove
                        </Button>
                        <span className="text-muted mx-1">|</span>
                        <Button variant="link" size="sm" className="text-primary p-0">
                          Save for later
                        </Button>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <div className="p-3 text-center text-muted">Your cart is empty.</div>
                )}
              </Card.Body>
            </Card>

            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
              <Link to="/products" className="btn btn-outline-primary">
                &larr; Back to shop
              </Link>
              <Button variant="danger" className="ms-auto" onClick={() => setCartItems([])}>
                Remove all
              </Button>
            </div>

            <Row className="g-3 text-center text-muted small">
              <Col md={4}>
                <div className="bg-white rounded p-3 shadow-sm h-100 d-flex flex-column justify-content-center">
                  <i className="bi bi-shield-lock fs-4 mb-2"></i> {/* Placeholder for icon */}
                  <p className="mb-0">Secure payment</p>
                  <p className="mb-0">Have you ever finally just</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="bg-white rounded p-3 shadow-sm h-100 d-flex flex-column justify-content-center">
                  <i className="bi bi-person-circle fs-4 mb-2"></i> {/* Placeholder for icon */}
                  <p className="mb-0">Customer support</p>
                  <p className="mb-0">Have you ever finally just</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="bg-white rounded p-3 shadow-sm h-100 d-flex flex-column justify-content-center">
                  <i className="bi bi-truck fs-4 mb-2"></i> {/* Placeholder for icon */}
                  <p className="mb-0">Free delivery</p>
                  <p className="mb-0">Have you ever finally just</p>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Right Column - Order Summary */}
          <Col lg={3}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Order Summary</h5>
                <Form.Group className="mb-3">
                  <Form.Label className="small">Have a coupon?</Form.Label>
                  <InputGroup size="sm">
                    <Form.Control placeholder="Add coupon" />
                    <Button variant="outline-primary">Apply</Button>
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span className="fw-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Discount:</span>
                  <span className="text-danger">-${discount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 border-bottom pb-3">
                  <span>Tax:</span>
                  <span className="fw-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0">Total:</h5>
                  <h5 className="mb-0">${total.toFixed(2)}</h5>
                </div>

                <Button variant="success" className="w-100 mb-3">
                  <i className="bi bi-credit-card me-2"></i>Checkout
                </Button>
                <div className="d-flex justify-content-center gap-2">
                  {/* Payment Icons - using Font Awesome or simple SVGs/images */}
                  <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" style={{ height: '24px' }} />
                  <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" style={{ height: '24px' }} />
                  <img src="https://img.icons8.com/color/48/000000/apple-pay.png" alt="Apple Pay" style={{ height: '24px' }} />
                  <img src="https://img.icons8.com/color/48/000000/google-pay.png" alt="Google Pay" style={{ height: '24px' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Saved for later section */}
        <h4 className="mt-5 mb-4">Saved for later</h4>
        <Row className="g-3 mb-5">
          {savedForLaterItems.map((item) => (
            <Col xs={6} sm={4} md={3} lg={2} key={item.id}>
              <Card className="h-100 shadow-sm text-center">
                <div className="d-flex justify-content-center align-items-center p-3" style={{ height: '120px' }}>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column p-2">
                  <p className="card-title mb-1 small text-truncate">{item.name}</p>
                  <p className="fw-bold text-danger mb-2">${item.price.toFixed(2)}</p>
                  <Button variant="primary" size="sm" className="mt-auto">Move to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Super discount banner */}
        <div className="bg-primary text-white rounded p-3 text-center mb-5">
          <Row className="align-items-center">
            <Col>
              <h5 className="mb-1">Super discount on more than 100 USD</h5>
              <p className="mb-0 small">Have you ever finally just write dummy info</p>
            </Col>
            <Col xs="auto" className="d-none d-md-block">
              <Button variant="light" className="text-primary">Shop now</Button>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default CartPage;