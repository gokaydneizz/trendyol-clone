import React from "react";
import styles from "./NoFavourite.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NoFavourite = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["no-fav-container"]}>
      <FontAwesomeIcon icon={faHeart} className={styles.heart} />
      <p className={styles.empty}>Favoriler Listeniz Henüz Boş</p>
      <p className={styles.emptyDesc}>
        Favori listenizde ürün bulunamadı. “Alışverişe Başla” butonuna
        tıklayarak dilediğiniz ürünleri favoriye ekleyebilirsiniz.
      </p>
      <button className={styles["start-btn"]} onClick={() => navigate("/")}>
        Alışverişe Başla
      </button>
    </div>
  );
};

export default NoFavourite;
