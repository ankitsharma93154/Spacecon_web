import React from "react";

const Cart = ({ cartItems, closeCart }) => {
  return (
    <div className="cart-sidebar">
      <button className="close-cart" onClick={closeCart}>
        ×
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
