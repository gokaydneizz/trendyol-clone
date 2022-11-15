import React from "react";
import styles from "./ProductContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const ProductContainer = ({ product, loading }) => {
  return (
    <section className={styles["product-container"]}>
      <div className={styles.imgBox}>
        <img src={product?.images[0]} alt="" />
      </div>
      <div className={styles["content-box"]}>
        <div className={styles.brandText}>
          <span className={styles.brand}>{product?.brand}</span>
          {product?.description}
        </div>
        <div className={styles.sellerText}>
          <span className={styles.seller}>Satıcı : </span>
          <span className={styles.brandSpan}>{product?.brand}</span>
          <img
            src="https://cdn.dsmcdn.com/indexing-sticker-stamp/stage/4b0d7ef1-8e8f-4c8f-b1c7-637e432ea2b4.png"
            alt="tick"
            className={styles.tick}
          />
        </div>
        <div className={styles.price}>{product?.price} TL</div>
        <div className={styles.collections}>
          <FontAwesomeIcon icon={faBookmark} className={styles.bookmark} />
          Koleksiyona ekle
        </div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default ProductContainer;
