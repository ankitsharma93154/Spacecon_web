import React from "react";

const ProductDetail = ({ product, closeModal }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>
          ×
        </button>
        <img src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
