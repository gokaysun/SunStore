import React from "react";
import HeroSlider from "../components/HeroSlider";
import CategoryPick from "../components/CategoryPick";
import ProductCategoryList from "../components/ProductCategoryList";
import ProductCard from "../components/ProductCard";
import CallToAction from "../components/CallToAction";
import FeaturedPosts from "../components/FeaturedPosts";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <CategoryPick />
      <ProductCategoryList />
      <ProductCard />
      <CallToAction />
      <FeaturedPosts />
    </main>
  );
}
