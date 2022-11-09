import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCube } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart, decreaseAmount, removeFromCart } from "../../redux/cart";

const CartItem = ({ item }) => {
  const { img, brand, amount, description, seller, price } = item;
  const itemPrice = price * item.amount;
  console.log(item);
  const dispatch = useDispatch();
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
          <button
            className={styles.counter}
            onClick={() => dispatch(addToCart(item))}
          >
            +
          </button>
          <input
            min="1"
            value={item.amount}
            max="9"
            type="number"
            className={styles.amount}
          />
          <button
            onClick={() => dispatch(decreaseAmount(item))}
            className={styles.counter}
          >
            -
          </button>
          <div className={styles.price}>{itemPrice}TL</div>
          <div
            className={styles.trash}
            onClick={() => dispatch(removeFromCart(item))}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
