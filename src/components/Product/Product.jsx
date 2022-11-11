import React, { useState } from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const { img, description, price, seller } = data;
  return (
    <div className={styles["product-card-container"]}>
      <div className={styles.favourite}>
        <FontAwesomeIcon className={styles["favourite-icon"]} icon={faHeart} />
      </div>
      <div className={styles.imgBox}>
        <img src={img} alt="card" />
      </div>

      <div className={styles["card-content"]}>
        <p>
          <span className={styles["seller"]}>{seller}</span> {description}
        </p>
        <span className={styles.price}>{price} TL</span>
        <button
          className={styles["card-btn"]}
          onClick={() => dispatch(addToCart(data))}
        >
          Sepete Ekle{" "}
          <FontAwesomeIcon className={styles["card-icon"]} icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default Product;
