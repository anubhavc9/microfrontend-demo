import React from "react";
import { createRoot } from "react-dom/client";

import Product from "./Product";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Product />
  </React.StrictMode>,
);
