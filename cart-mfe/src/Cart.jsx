import React, { useEffect, useState } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleItemAdded = (event) => {
      const { product, quantity } = event.detail;

      setItems((currentItems) => {
        const existingItem = currentItems.find(
          (item) => item.id === product.id,
        );

        if (existingItem) {
          return currentItems.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item,
          );
        }

        return [
          ...currentItems,
          {
            ...product,
            quantity,
          },
        ];
      });
    };

    window.addEventListener("cart:item-added", handleItemAdded);

    return () => {
      window.removeEventListener("cart:item-added", handleItemAdded);
    };
  }, []);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h2>Cart MFE</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>
          ))}

          <hr />

          <h3>Total: ₹{total}</h3>

          <button>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
