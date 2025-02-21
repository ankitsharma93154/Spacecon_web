import React from "react";
import spaceSuit from "../Space_suit.jpg";
import alien from "../alien_plushie.jpg";
import mug from "../nasa_mug.jpg";
import poster from "../Galactic_poster.jpg";
import model from "../Launch_model.jpg";
import jewelry from "../Meteorite_jewelry.jpg";
import lamp from "../moon_lamp.jpg";
import hoodie from "../space_hoodie.jpg";
import keychain from "../telescope_keychain.jpg";

const products = [
  {
    id: 1,
    name: "Astronaut Suit",
    price: "$199",
    img: spaceSuit,
  },
  { id: 2, name: "Meteorite Jewelry", price: "$99", img: jewelry },
  { id: 3, name: "Planetary Poster", price: "$29", img: poster },
  { id: 4, name: "Moon Lamp", price: "$49", img: lamp },
  { id: 5, name: "Galaxy Hoodie", price: "$59", img: hoodie },
  { id: 6, name: "NASA Mug", price: "$19", img: mug },
  { id: 7, name: "Alien Plushie", price: "$35", img: alien },
  { id: 8, name: "Telescope Keychain", price: "$12", img: keychain },
  { id: 9, name: "Rocket Model", price: "$89", img: model },
];

const Products = ({ openProduct }) => {
  return (
    <section className="products" id="shop">
      <h2>Best Sellers</h2>
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
