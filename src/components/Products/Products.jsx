import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Product from "../Product/Product";
import { useFetch } from "../../hooks/useFetch";

const Products = () => {
  const [products, setProducts] = useState();

  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  useEffect(() => {
    setProducts(data?.products);
  }, [data]);

  if (loading) {
    return <h1 style={{ color: "black" }}>Loading...</h1>;
  }
  if (!loading && error) {
    return <h1>There is an error</h1>;
  }
  if (!error && !loading) {
    return (
      <section className={styles["products-container"]}>
        {products?.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </section>
    );
  }
};

export default Products;
