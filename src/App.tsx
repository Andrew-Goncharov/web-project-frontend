import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import { Footer } from "./components";
import Header from "./components/Header/Header";
import { Category, Main, Product } from "./pages";

function App() {
  return (
    <div className="applicationWrapper">
      <Header />
      <div className="appContentWrapper">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="*" element={<div>not found</div>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
