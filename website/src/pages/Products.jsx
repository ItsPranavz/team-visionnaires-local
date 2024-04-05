import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductBanner from "../components/ProductBanner";
import WhySection from "../components/WhySection";
import ProductSection from '../components/ProductSection';
import Heading from "../components/Heading";
import Data from "../components/Data";
function Products() {
  return (
    <>
      <Header />
       
      <ProductBanner/>
      <Heading title="Our Products" />
      <ProductSection />
      <Data/>
      <Heading title="Why Choose Us?" />
      <WhySection />
      <Footer />
    </>
  );
}

export default Products;
