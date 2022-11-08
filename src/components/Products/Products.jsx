import React, { useState } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import ProductData from "../../product.json";

const Products = () => {
  const [products, setProducts] = useState(ProductData);

  return (
    <section className={styles["products-container"]}>
      {products.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </section>
  );
};

export default Products;
