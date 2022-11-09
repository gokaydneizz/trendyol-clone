import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <DiscountBar />
      <div className={styles.container}>
        <Navbar />
        <div className={styles["cart-page-container"]}>
          <div className={styles.carts}>
            <h1 style={{ fontWeight: 400, fontSize: "25px" }}>
              Sepetim ({cart.length} Ürün)
            </h1>
            <div className={styles["carts-container"]}>
              {cart.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
              ))}
            </div>
          </div>

          <div className={styles["total-amount"]}>
            <button className={styles["approve-btn"]}>
              Sepeti Onayla <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className={styles["order-details"]}>
              <h1>Sipariş Özeti</h1>
              <div className={styles["sum-of-products"]}>
                Ürünün toplamı <span>1761TL</span>
              </div>
              <div className={styles["sum-of-products"]}>
                Kargo toplamı <span>19TL</span>
              </div>
              <div className={styles["all-calculated"]}>1900TL</div>
            </div>
            <div className={styles["location"]}>
              <img
                src="https://cdn.dsmcdn.com/web/production/pudo-banner-without-coupon-price.svg"
                alt=""
              />
            </div>
            <button className={styles.discountBtn}>
              <FontAwesomeIcon
                style={{ color: "orangered", height: "15px" }}
                icon={faPlus}
              />{" "}
              İndirim Kuponu Gir
            </button>
            <button className={styles["approve-btn"]}>
              Sepeti Onayla <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
