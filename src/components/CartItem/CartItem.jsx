import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCube } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decreaseAmount,
  removeFromCart,
  increaseByAmount,
} from "../../redux/cart";

const CartItem = ({ item }) => {
  let { thumbnail, brand, description, price } = item;
  const itemPrice = price * item.amount;
  const [productAmount, setProductAmount] = useState(item.amount);

  useEffect(() => {
    dispatch(
      increaseByAmount({
        product: item,
        amount: productAmount,
      })
    );

    if (!productAmount) {
      setProductAmount("");
    }
  }, [productAmount]);

  useEffect(() => {
    setProductAmount(item.amount);
  }, [item.amount]);

  const dispatch = useDispatch();
  return (
    <div className={styles["cart-item-container"]}>
      <div className={styles.sellerDiv}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.sellerText}>Satıcı : </div>
        <div className={styles.seller}>{brand}</div>
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
          <img src={thumbnail} alt="product-photo" />
          <div className={styles["product-name"]}>
            <span className={styles.brand}>{brand} </span> {description}
          </div>
        </div>
        <div className={styles.buttons}>
          <button
            disabled={item.amount >= 10}
            className={styles.counter}
            onClick={() => {
              dispatch(addToCart(item));
            }}
          >
            +
          </button>
          <input
            maxLength={1}
            disabled={item.amount > 10}
            type="text"
            value={productAmount}
            className={styles.amount}
            onChange={(e) => {
              setProductAmount(e.target.value);
            }}
          />
          <button
            onClick={() => dispatch(decreaseAmount(item))}
            className={styles.counter}
            disabled={item.amount <= 1}
          >
            -
          </button>
          <div className={styles["price-container"]}>
            <div className={styles.price}>{itemPrice}TL</div>
          </div>
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
