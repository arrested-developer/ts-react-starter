import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Simple from "./pages/simple";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="simple" element={<Simple />} />
      <Route path="product/:id" element={<Product />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There&apos;s nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default App;
