import React from "react";

const products = [
  { id: 1, name: "Astronaut Suit", price: "$199", img: "suit.jpg" },
  { id: 2, name: "Meteorite Jewelry", price: "$99", img: "jewel.jpg" },
  { id: 3, name: "Planetary Poster", price: "$29", img: "poster.jpg" },
];

const Products = ({ openProduct }) => {
  return (
    <section className="products">
      <h2>Our Collection</h2>
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product"
            onClick={() => openProduct(product)}
          >
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
