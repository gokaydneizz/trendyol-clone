import React from "react";
import styles from "./Product.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart";
import { favouritesHandler } from "../../redux/favourites";
import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const favourites = useSelector((state) => state.favourites);

  const isFavourite = favourites.filter(
    (favouriteProduct) => favouriteProduct.id === data.id
  );

  const { brand, description, price, thumbnail, title, id } = data;

  return (
    <div className={styles["product-card-container"]}>
      <div
        onClick={() => {
          dispatch(favouritesHandler({ product: data }));
        }}
        className={
          isFavourite.length > 0 ? styles.selectedFavourite : styles.favourite
        }
      >
        <FontAwesomeIcon className={styles["favourite-icon"]} icon={faHeart} />
      </div>
      <div className={styles.imgBox}>
        <img
          onClick={() => navigate(`/product/${id}`)}
          src={thumbnail}
          alt="card"
        />
      </div>

      <div className={styles["card-content"]}>
        <p>
          <span className={styles["seller"]}>{brand}</span> {title}
        </p>
        <span className={styles.price}>{price * 10} TL</span>
      </div>
    </div>
  );
};

export default Product;
