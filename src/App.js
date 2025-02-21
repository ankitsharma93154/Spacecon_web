import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Shop from "./components/shop";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setCartOpen(true); // Open cart when an item is added
  };

  return (
    <>
      <Navbar />
      <Home />
      <Products openProduct={setSelectedProduct} />
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          closeModal={() => setSelectedProduct(null)}
        />
      )}
      {cartOpen && (
        <Cart cartItems={cartItems} closeCart={() => setCartOpen(false)} />
      )}
      <Shop addToCart={addToCart} />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
