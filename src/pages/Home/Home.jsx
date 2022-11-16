import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";

const Home = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "Trendyol";
  }, []);

  return (
    <>
      <DiscountBar />
      <div className="container">
        <Navbar setSearch={setSearch} />
        <Categories />
        <Products search={search} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
