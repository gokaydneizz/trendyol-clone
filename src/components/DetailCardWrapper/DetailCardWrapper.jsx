import React from "react";
import styles from "./DetailCardWrapper.module.css";

const DetailCardWrapper = ({ children }) => {
  return <div className={styles["card-container"]}>{children}</div>;
};

export default DetailCardWrapper;
