import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
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
      <div>
        <Navbar setSearch={setSearch} />
        <Categories />
        <Products search={search} />
      </div>
    </>
  );
};

export default Home;
