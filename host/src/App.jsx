import React, { Suspense } from "react";

const Product = React.lazy(() => import("productMfe/Product"));
const Cart = React.lazy(() => import("cartMfe/Cart"));

const App = () => {
  return (
    <div>
      <h1>My E-commerce App</h1>

      <Suspense fallback={<div>Loading Product...</div>}>
        <Product />
      </Suspense>

      <hr />

      <Suspense fallback={<div>Loading Cart...</div>}>
        <Cart />
      </Suspense>
    </div>
  );
};

export default App;
