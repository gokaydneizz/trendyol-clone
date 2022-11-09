import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import DiscountBar from "../../components/DiscountBar/DiscountBar";
import Footer from "../../components/Footer/Footer";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <DiscountBar />
      <div className="container">
        <Navbar />
        <h1 style={{ fontWeight: 400, fontSize: "25px", marginTop: "15px" }}>
          Sepetim ({cart.length} Ürün)
        </h1>
        <div className={styles["carts-container"]}>
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
