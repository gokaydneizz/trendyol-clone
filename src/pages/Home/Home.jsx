import React, { useEffect } from "react";
import Categories from "../../components/Categories/Categories";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Home = () => {
  useEffect(() => {
    document.title = "Trendyol";
  }, []);

  return (
    <>
      <DiscountBar />
      <div className="container">
        <Navbar />
        <Categories />
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Home;
