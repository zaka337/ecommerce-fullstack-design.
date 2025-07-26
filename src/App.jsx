import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails'; 
import CartPage from './pages/CartPage';// <--- ADD THIS IMPORT
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- ENSURE THIS IS PRESENT for Bootstrap CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          {/* <--- ADD THIS ROUTE FOR PRODUCT DETAILS */}
          <Route path="/product/:productId" element={<ProductDetails />} />
           <Route path="/cart" element={<CartPage />} /> 
          
          {/* Add more routes later for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;