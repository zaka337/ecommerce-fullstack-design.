import React, { useState } from 'react'; // Import useState
import { ShoppingCart, User, MessageSquare, Package, Menu } from 'lucide-react'; // Ensure these are installed: npm install lucide-react
import { Container, Breadcrumb, Navbar, Nav, Offcanvas, Button, Form, InputGroup } from 'react-bootstrap'; // Import Offcanvas, Button, Form, InputGroup, Navbar, Nav
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used, if not, remove this import and replace <Link> with <a>

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State for Offcanvas visibility

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <header className="bg-white shadow-sm sticky-top">
      {/* Top Header Section */}
      <Container fluid className="py-2 px-2"> {/* Reduced vertical padding on mobile */}
        <div className="d-flex align-items-center justify-content-between gap-2">
          {/* Brand Logo and Mobile Menu Toggle */}
          <div className="d-flex align-items-center flex-shrink-0">
            {/* Offcanvas Toggle Button (visible only on md-down) */}
            <Button
              variant="light"
              className="d-md-none me-2 p-1" // Visible only on mobile/tablet, slightly smaller padding
              onClick={handleShowOffcanvas}
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <Menu size={24} />
            </Button>
            {/* Brand Icon */}
            <div className="bg-primary p-2 rounded me-2">
              <ShoppingCart className="text-white" size={24} />
            </div>
            {/* Brand Text (hidden on extra small screens) */}
            <h4 className="mb-0 text-primary fw-bold d-none d-sm-block">Brand</h4>
          </div>

          {/* Search Bar (visible from sm breakpoint upwards) */}
          <div className="flex-grow-1 mx-2 d-none d-sm-block"> {/* Hidden on xs, takes available space on sm+ */}
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search products..."
                aria-label="Search"
              />
              {/* Category Select (hidden on smaller screens) */}
              <Form.Select className="d-none d-lg-block" style={{ maxWidth: '150px' }}>
                <option>All category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Home</option>
              </Form.Select>
              <Button variant="primary">Search</Button>
            </InputGroup>
          </div>

          {/* User Navigation (Icons only on mobile for space saving) */}
          <div className="d-flex align-items-center gap-2 flex-shrink-0">
            {/* Profile Icon/Link */}
            <div className="d-flex align-items-center text-muted d-none d-sm-flex"> {/* Hide on xs, show from sm+ */}
              <User size={20} className="me-1" />
              <small className="d-none d-md-inline">Profile</small> {/* Hide text on sm, show on md+ */}
            </div>
            {/* Message Icon/Link (hidden on smaller screens) */}
            <div className="d-flex align-items-center text-muted d-none d-lg-flex">
              <MessageSquare size={20} className="me-1" />
              <small className="d-none d-xl-inline">Message</small>
            </div>
            {/* Orders Icon/Link (hidden on smaller screens) */}
            <div className="d-flex align-items-center text-muted d-none d-lg-flex">
              <Package size={20} className="me-1" />
              <small className="d-none d-xl-inline">Orders</small>
            </div>
            {/* Shopping Cart with Badge */}
            <div className="position-relative">
              <ShoppingCart size={24} className="text-muted" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning small">
                2
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar for extra-small screens (when the main search is hidden) */}
        <div className="d-block d-sm-none mt-2"> {/* Show on xs, hide from sm+ */}
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search..." // Simplified placeholder for small screens
                aria-label="Search"
              />
              <Button variant="primary">Search</Button> {/* Direct search button, no icon as it needs text */}
            </InputGroup>
        </div>
      </Container>

      {/* Offcanvas Menu for Mobile Navigation (hidden on md and larger screens) */}
      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="start" id="offcanvasNavbar">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {/* Main Nav Links */}
            <Nav.Link as={Link} to="/" onClick={handleCloseOffcanvas}>Home</Nav.Link>
            <Nav.Link as={Link} to="/all-categories" onClick={handleCloseOffcanvas}>All category</Nav.Link>
            <Nav.Link as={Link} to="/hot-offers" onClick={handleCloseOffcanvas}>Hot offers</Nav.Link>
            <Nav.Link as={Link} to="/gift-boxes" onClick={handleCloseOffcanvas}>Gift boxes</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleCloseOffcanvas}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/menu-item" onClick={handleCloseOffcanvas}>Menu Item</Nav.Link>
            <Nav.Link as={Link} to="/help" onClick={handleCloseOffcanvas}>Help</Nav.Link>

            {/* User Links (visible if hidden in top bar on smaller screens) */}
            <hr className="my-2" />
            <Nav.Link as={Link} to="/profile" onClick={handleCloseOffcanvas} className="d-md-none">Profile</Nav.Link>
            <Nav.Link as={Link} to="/messages" onClick={handleCloseOffcanvas} className="d-lg-none">Messages</Nav.Link>
            <Nav.Link as={Link} to="/orders" onClick={handleCloseOffcanvas} className="d-lg-none">Orders</Nav.Link>

            {/* Language and Ship Selectors in Offcanvas */}
            <hr className="my-2" />
            <Form.Select className="form-select-sm mb-2" onChange={handleCloseOffcanvas}>
              <option>English, USD</option>
              {/* Add other language/currency options */}
            </Form.Select>
            <Form.Select className="form-select-sm" onChange={handleCloseOffcanvas}>
              <option>Ship to 🇺🇸</option>
              {/* Add other shipping options */}
            </Form.Select>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Bottom Navigation Menu (visible only on md and larger screens) */}
      <div className="border-top d-none d-md-block"> {/* Entirely hidden on xs/sm */}
        <Container fluid className="py-2 px-2">
          <div className="d-flex justify-content-between align-items-center gap-2 gap-md-4">
            {/* Navigation Links */}
            <nav className="d-flex flex-wrap gap-3">
              <a href="#" className="text-decoration-none text-dark small">All category</a>
              <a href="#" className="text-decoration-none text-dark small">Hot offers</a>
              <a href="#" className="text-decoration-none text-dark small">Gift boxes</a>
              <a href="#" className="text-decoration-none text-dark small">Projects</a>
              <a href="#" className="text-decoration-none text-dark small">Menu Item</a>
              <a href="#" className="text-decoration-none text-dark small">Help</a>
            </nav>
            {/* Language and Ship Selectors */}
            <div className="d-flex gap-2">
              <Form.Select className="form-select-sm border-0 w-auto">
                <option>English, USD</option>
              </Form.Select>
              <Form.Select className="form-select-sm border-0 w-auto">
                <option>Ship to 🇺🇸</option>
              </Form.Select>
            </div>
          </div>
        </Container>
      </div>

      {/* Breadcrumbs Section */}
      <div style={{ backgroundColor: '#F8F9FA', padding: '0.5rem 0' }}>
        <Container fluid>
          <Breadcrumb className="mb-0 small">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/category" }}>Category</Breadcrumb.Item>
            <Breadcrumb.Item active className="text-truncate">Current Page Name Can Be Long</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    </header>
  );
};

export default Header;