import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faTicket,
  faDownLong,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Selects.module.css";

const Selects = () => {
  const [selected, setSelected] = useState("Orange");

  return (
    <div className={styles["selects-container"]}>
      <div
        className={
          selected === "Orange"
            ? `${styles["select-item"]} ${styles["orange"]}`
            : `${styles["select-item"]}`
        }
        onClick={() => setSelected("Orange")}
      >
        <FontAwesomeIcon
          className={`${styles["select-icon"]} ${styles["orange"]}`}
          icon={faHeart}
        />
        <span>Tüm Favoriler</span>
      </div>
      <div
        className={
          selected === "Blue"
            ? `${styles["select-item"]} ${styles["blue"]}`
            : `${styles["select-item"]}`
        }
        onClick={() => {
          setSelected("Blue");
        }}
      >
        <FontAwesomeIcon
          className={`${styles["select-icon"]} ${styles["blue"]}`}
          icon={faStar}
        />
        <span>Yıldızlı Ürünler</span>
      </div>
      <div
        className={
          selected === "Red"
            ? `${styles["select-item"]} ${styles["red"]}`
            : `${styles["select-item"]}`
        }
        onClick={() => setSelected("Red")}
      >
        <FontAwesomeIcon
          className={`${styles["select-icon"]} ${styles["red"]}`}
          icon={faDownLong}
        />
        <span>Fiyatı Düşenler</span>
      </div>
      <div
        className={
          selected === "Orangered"
            ? `${styles["select-item"]} ${styles["orangered"]}`
            : `${styles["select-item"]}`
        }
        onClick={() => setSelected("Orangered")}
      >
        <FontAwesomeIcon
          className={`${styles["select-icon"]} ${styles["orangered"]}`}
          icon={faTicket}
        />
        <span>Kuponlu Ürünler</span>
      </div>
    </div>
  );
};

export default Selects;
