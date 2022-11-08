import React from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return <div>Cart</div>;
};

export default Cart;
