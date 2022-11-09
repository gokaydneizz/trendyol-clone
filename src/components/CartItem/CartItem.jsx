import React from "react";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCube } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  console.log(item);
  const { img, brand, amount, description, seller, price } = item;
  return (
    <div className={styles["cart-item-container"]}>
      <div className={styles.sellerDiv}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.sellerText}>Satıcı : </div>
        <div className={styles.seller}>{seller}</div>
        <FontAwesomeIcon className={styles.arrowIcon} icon={faChevronRight} />
      </div>
      {price > 50 && (
        <div className={styles.shipment}>
          <FontAwesomeIcon
            icon={faCube}
            style={{ color: "green", position: "relative", top: "2px" }}
          />{" "}
          Kargo Bedava !
        </div>
      )}
      <div className={styles["product"]}>
        <div className={styles["product-details"]}>
          <input type="checkbox" className={styles.checkbox} />
          <img src={img} alt="" />
          <div className={styles["product-name"]}>
            <span className={styles.brand}>{brand} </span> {description}
          </div>
        </div>
        <div className={styles.buttons}>
          <button className={styles.counter}>+</button>
          <input min="1" max="9" type="number" className={styles.amount} />
          <button className={styles.counter}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
