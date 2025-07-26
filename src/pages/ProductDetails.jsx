import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import useParams and Link
import Header from '../components/Header'; // Adjust path
import Footer from '../components/Footer'; // Adjust path
import { Star, Heart, MessageSquare, Package, User } from 'lucide-react'; // For icons
import { Container, Row, Col, Card, Button, Tab, Tabs, Nav } from 'react-bootstrap'; // Import Tab, Tabs, Nav for description section

const ProductDetails = () => {
  // Use useParams to get the productId from the URL
  const { productId } = useParams();

  // Dummy product data - In a real app, you'd fetch this from an API based on productId
  const dummyProduct = {
    id: productId, // Use the ID from the URL
    name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
    price: '$99.00',
    originalPrice: '$100-150',
    discountedPrice: '$78.00',
    sold: 154,
    reviewsCount: 32,
    rating: 4.3,
    images: [
      'https://via.placeholder.com/600x600/D3D3D3/000000?text=Product+Image',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+1',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+2',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+3',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+4',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+5',
      'https://via.placeholder.com/100x100/D3D3D3/000000?text=Thumb+6'
    ],
    supplier: {
      name: 'Guanqi Trading LLC',
      location: 'Germany, Berlin',
      verified: true,
      worldwideShipping: true
    },
    details: {
      priceRange: '100-150 pcs',
      price700: '700+ pcs',
      type: 'Classic shoes',
      material: 'Plastic material',
      design: 'Modern nice'
    },
    customization: 'Customized logo and design, customized packages',
    protection: 'Refund Policy',
    warranty: '2 years full warranty',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`,
    technicalDetails: {
      model: 'HSTB89567',
      style: 'Classic style',
      certificate: 'ISO-898921212',
      size: '34mm x 450mm x 19mm',
      memory: '36GB RAM'
    },
    features: [
      'Some great feature name here',
      'Lorem ipsum dolor sit amet, consectetur',
      'Duis aute irure dolor in reprehenderit',
      'Some great feature name here'
    ],
    relatedProducts: [
      { id: 'rel1', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/87CEEB/ffffff?text=Product' },
      { id: 'rel2', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/A9A9A9/ffffff?text=Product' },
      { id: 'rel3', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/808080/ffffff?text=Product' },
      { id: 'rel4', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/6B8E23/ffffff?text=Product' },
      { id: 'rel5', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/CD853F/ffffff?text=Product' },
      { id: 'rel6', name: 'Xiaomi Redmi 8 Original', priceRange: '$32.00-$40.00', image: 'https://via.placeholder.com/100x100/D2B48C/ffffff?text=Product' },
    ],
    youMayLike: [
      { id: 'ml1', name: 'Men Blazers Sets Elegant Formal', priceRange: '$7.00 - $99.50', image: 'https://via.placeholder.com/50x50/36454F/ffffff?text=Blazer' },
      { id: 'ml2', name: 'Men Shirt Sleeve Polo Contrast', priceRange: '$7.00 - $99.50', image: 'https://via.placeholder.com/50x50/ADD8E6/000000?text=Polo' },
      { id: 'ml3', name: 'Apple Watch Series Space Gray', priceRange: '$7.00 - $99.50', image: 'https://via.placeholder.com/50x50/808080/ffffff?text=Watch' },
      { id: 'ml4', name: 'Basketball Crew Socks Long Stuff', priceRange: '$7.00 - $99.50', image: 'https://via.placeholder.com/50x50/FFA07A/000000?text=Socks' },
      { id: 'ml5', name: 'New Summer Men\'s casual T-Shirts', priceRange: '$7.00 - $99.50', image: 'https://via.placeholder.com/50x50/87CEEB/000000?text=T-shirt' },
    ]
  };

  const [mainImage, setMainImage] = useState(dummyProduct.images[0]);
  const [activeTab, setActiveTab] = useState('description'); // For the tabs (Description, Reviews, etc.)

  useEffect(() => {
    // In a real application, you would fetch product data here
    // For example:
    // fetch(`/api/products/${productId}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setProduct(data);
    //     setMainImage(data.images[0]);
    //   })
    //   .catch(error => console.error('Error fetching product:', error));

    // For now, we're using dummyProduct, but we ensure the main image is updated
    if (dummyProduct.images && dummyProduct.images.length > 0) {
      setMainImage(dummyProduct.images[0]);
    }
  }, [productId]); // Re-run if productId changes

  if (!dummyProduct) {
    return (
      <div className="text-center p-5">
        <Header />
        <p>Loading product details...</p>
        <Footer />
      </div>
    );
  }

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

      {/* Breadcrumb - using React Bootstrap's Breadcrumb */}
      {/* Assuming breadcrumbs are handled within Header.jsx or are a separate component */}

      <Container fluid className="py-4">
        <Row className="g-3">
          {/* Main Product Details Column */}
          <Col xs={12} lg={9}>
            <Row className="bg-white rounded p-3 shadow-sm g-3 mb-3">
              {/* Product Images */}
              <Col xs={12} md={6} xl={5} className="d-flex flex-column align-items-center">
                <div className="main-image-container mb-3 text-center" style={{ maxWidth: '400px', maxHeight: '400px' }}>
                  <img src={mainImage} alt={dummyProduct.name} className="img-fluid rounded border" />
                </div>
                <div className="thumbnail-gallery d-flex flex-wrap justify-content-center gap-2">
                  {dummyProduct.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`img-thumbnail p-1 cursor-pointer ${mainImage === img ? 'border-primary' : ''}`}
                      style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                      onClick={() => setMainImage(img)}
                    />
                  ))}
                </div>
              </Col>

              {/* Product Info */}
              <Col xs={12} md={6} xl={7}>
                <h3 className="mb-2">{dummyProduct.name}</h3>
                <div className="d-flex align-items-center mb-2">
                  <div className="d-flex me-2">
                    {renderStars(dummyProduct.rating)}
                  </div>
                  <span className="text-warning small me-2">{dummyProduct.rating}</span>
                  <span className="text-muted small">({dummyProduct.reviewsCount} reviews)</span>
                  <span className="text-muted small ms-2">| {dummyProduct.sold} sold</span>
                </div>

                <div className="bg-light p-3 rounded mb-3">
                  <p className="mb-1 text-muted">
                    <span className="text-decoration-line-through me-2">{dummyProduct.originalPrice}</span>
                    <span className="fw-bold fs-4 text-danger">{dummyProduct.price}</span>
                  </p>
                  <p className="mb-0 text-muted small">
                    <span className="fw-bold me-1">{dummyProduct.discountedPrice}</span>
                    <span className="text-success">20% off</span> for orders from {dummyProduct.details.priceRange}
                  </p>
                  <p className="mb-0 text-muted small">
                    <span className="fw-bold me-1">{dummyProduct.discountedPrice}</span>
                    <span className="text-success">20% off</span> for orders from {dummyProduct.details.price700}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    <span className="text-muted me-2">Price:</span>
                    <span className="fw-bold">Negotiable</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Type:</span>
                    <span>{dummyProduct.details.type}</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Material:</span>
                    <span>{dummyProduct.details.material}</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Design:</span>
                    <span>{dummyProduct.details.design}</span>
                  </p>
                </div>

                <div className="mb-3">
                  <p className="mb-1">
                    <span className="text-muted me-2">Customization:</span>
                    <span>{dummyProduct.customization}</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Protection:</span>
                    <span>{dummyProduct.protection}</span>
                  </p>
                  <p className="mb-1">
                    <span className="text-muted me-2">Warranty:</span>
                    <span>{dummyProduct.warranty}</span>
                  </p>
                </div>

                <div className="d-flex gap-2">
                  <Button variant="primary" className="fw-bold flex-grow-1">Send inquiry</Button>
                  <Button variant="outline-primary" className="fw-bold flex-grow-1">Add to cart</Button>
                  <Button variant="light" className="border">
                    <Heart size={20} className="text-muted" />
                  </Button>
                </div>
              </Col>
            </Row>

            {/* Description, Reviews, Shipping, About Seller Tabs */}
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <Tabs
                  id="product-details-tabs"
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                  className="mb-3"
                >
                  <Tab eventKey="description" title="Description">
                    <div className="mb-4">
                      <p>{dummyProduct.description}</p>
                    </div>
                    <h6 className="fw-bold mb-3">Technical Details:</h6>
                    <table className="table table-bordered table-sm">
                      <tbody>
                        <tr><td>Model</td><td>{dummyProduct.technicalDetails.model}</td></tr>
                        <tr><td>Style</td><td>{dummyProduct.technicalDetails.style}</td></tr>
                        <tr><td>Certificate</td><td>{dummyProduct.technicalDetails.certificate}</td></tr>
                        <tr><td>Size</td><td>{dummyProduct.technicalDetails.size}</td></tr>
                        <tr><td>Memory</td><td>{dummyProduct.technicalDetails.memory}</td></tr>
                      </tbody>
                    </table>
                    <h6 className="fw-bold mb-2">Features:</h6>
                    <ul className="list-unstyled">
                      {dummyProduct.features.map((feature, index) => (
                        <li key={index}><i className="bi bi-check-lg text-success me-2"></i>{feature}</li>
                      ))}
                    </ul>
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    <p>Reviews section content goes here.</p>
                    {/* You can add actual review components here */}
                  </Tab>
                  <Tab eventKey="shipping" title="Shipping">
                    <p>Shipping information goes here.</p>
                  </Tab>
                  <Tab eventKey="aboutSeller" title="About Seller">
                    <p>Information about the seller goes here.</p>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>

            {/* Related Products Section */}
            <h5 className="mb-3">Related products</h5>
            <Row xs={2} sm={3} md={4} lg={5} xl={6} className="g-3 mb-3">
              {dummyProduct.relatedProducts.map(product => (
                <Col key={product.id}>
                  <Card className="h-100 text-center shadow-sm">
                    <Card.Img variant="top" src={product.image} className="p-2" style={{ maxHeight: '120px', objectFit: 'contain' }} />
                    <Card.Body className="p-2">
                      <Card.Title className="mb-1 small text-truncate">{product.name}</Card.Title>
                      <Card.Text className="fw-bold text-danger small">{product.priceRange}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Discount Banner */}
            <div className="bg-info text-white p-3 rounded d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start">
              <p className="mb-2 mb-md-0 fw-bold">Super discount on more than 100 USD</p>
              <Button variant="warning" className="text-primary fw-bold">Shop now</Button>
            </div>
          </Col>

          {/* Right Sidebar - Seller Info and You May Like */}
          <Col xs={12} lg={3}>
            {/* Seller Info */}
            <Card className="shadow-sm mb-3">
              <Card.Body>
                <h6 className="fw-bold mb-3">Supplier</h6>
                <div className="d-flex align-items-center mb-3">
                  <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-2" style={{ width: '40px', height: '40px' }}>
                    <span className="fw-bold">{dummyProduct.supplier.name.charAt(0)}</span>
                  </div>
                  <div>
                    <Card.Title className="mb-0 small">{dummyProduct.supplier.name}</Card.Title>
                    <small className="text-muted">Online</small>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="mb-1 small"><i className="bi bi-geo-alt-fill me-2"></i>{dummyProduct.supplier.location}</p>
                  {dummyProduct.supplier.verified && (
                    <p className="mb-1 small"><i className="bi bi-check-circle-fill text-success me-2"></i>Verified Seller</p>
                  )}
                  {dummyProduct.supplier.worldwideShipping && (
                    <p className="mb-1 small"><i className="bi bi-globe me-2"></i>Worldwide shipping</p>
                  )}
                </div>
                <Button variant="outline-primary" size="sm" className="w-100 mb-2">Send inquiry</Button>
                <Button variant="light" size="sm" className="w-100 border">
                  <User size={16} className="me-1" /> Seller's profile
                </Button>
              </Card.Body>
            </Card>

            {/* You May Like Section */}
            <h6 className="mb-3">You may like</h6>
            <Card className="shadow-sm">
              <Card.Body>
                {dummyProduct.youMayLike.map(item => (
                  <div key={item.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                    <img src={item.image} alt={item.name} className="me-3 rounded" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                    <div>
                      <h6 className="mb-0 small">{item.name}</h6>
                      <p className="mb-0 text-muted small">{item.priceRange}</p>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ProductDetails;