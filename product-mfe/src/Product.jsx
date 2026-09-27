import React from "react";

const Product = () => {
  const product = {
    id: 1,
    name: "MacBook Air",
    price: 99999,
  };

  const handleAddToCart = () => {
    window.dispatchEvent(
      new CustomEvent("cart:item-added", {
        detail: {
          product,
          quantity: 1,
        },
      }),
    );

    console.log("Product MFE: item added to cart");
  };

  return (
    <div>
      <h2>Product MFE</h2>

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
