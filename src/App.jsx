import React from "react";
import Header from "./components/Header";
import CategoryPick from "./components/CategoryPick";
import ProductCategoryList from "./components/ProductCategoryList";  // Buraya ekledik
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./components/ProductCard";
import CallToAction from "./components/CallToAction";
import FeaturedPosts from "./components/FeaturedPosts";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Mobil Header */}
      <Header />


      {/* Category Pick */}
      <CategoryPick />

      {/* Product Category List */}
      <ProductCategoryList />
      
      {/* Product Card */}
      <ProductCard />

      {/* Call To Action */}
      <CallToAction />

      <FeaturedPosts />

      <Footer />

      {/* İstersen buraya fotoğraflar veya diğer içerikler ekleyebilirsin */}
    </div>
  );
}

export default App;