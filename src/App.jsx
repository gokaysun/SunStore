import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="bg-white min-h-screen">
      {/* Global Header (desktop has fixed bars) */}
      <Header />

      {/* Routed content with offset under fixed desktop header */}
      <main className="mx-auto max-w-md lg:max-w-none lg:pt-[116px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default App;