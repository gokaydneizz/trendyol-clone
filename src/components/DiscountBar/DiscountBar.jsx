import React from "react";
import styles from "./DiscountBar.module.css";

const DiscountBar = () => {
  return (
    <div className={styles["discount-bar"]}>
      <img
        src="https://cdn.dsmcdn.com/mrktng/crm/2022/inbox/nov/2/ab.gif"
        alt="discount"
      />
    </div>
  );
};

export default DiscountBar;
