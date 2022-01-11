import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.scss";
import { FullScreen, ItemInfo, Header } from "./components";
function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemInfo cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/product-large" element={<FullScreen />} />
      </Routes>
    </div>
  );
}

export default App;
