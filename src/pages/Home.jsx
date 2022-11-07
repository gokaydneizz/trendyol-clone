import React from "react";
import Categories from "../components/Categories/Categories";
import DiscountBar from "../components/DiscountBar/DiscountBar";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <DiscountBar />
      <div className="container">
        <Navbar />
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
