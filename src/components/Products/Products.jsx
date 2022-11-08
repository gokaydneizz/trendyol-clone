import React, { useState } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import ProductData from "../../product.json";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState(ProductData);

  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <section className={styles["products-container"]}>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </section>
  );
};

export default Products;
