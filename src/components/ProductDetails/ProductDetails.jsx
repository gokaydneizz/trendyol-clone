import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Categories from "../Categories/Categories";
import Navbar from "../Navbar/Navbar";
import ProductContainer from "../ProductContainer/ProductContainer";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  const productId = useLocation().pathname.split("/")[2];

  const { data, loading, error } = useFetch(
    `https://dummyjson.com/products/${productId}`
  );

  console.log(data);
  return (
    <div className="container">
      <Navbar />
      <Categories />
      {!loading && (
        <main className={styles["main-page-container"]}>
          <ProductContainer product={data} />
        </main>
      )}
      {loading && <h1>Loading....</h1>}
    </div>
  );
};

export default ProductDetails;
