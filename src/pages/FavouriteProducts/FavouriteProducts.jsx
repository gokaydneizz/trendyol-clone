import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./FavouriteProducts.module.css";
import {
  faHeart,
  faBookmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Categories from "../../components/Categories/Categories";
import FavProductItems from "../../components/FavouriteProductsItem/FavProductItems";
import Selects from "../../components/Selects/Selects";

const FavouriteProducts = () => {
  const favourites = useSelector((state) => state.favourites);

  const [selectedCategory, setSelectedCategory] = useState("Favorilerim");
  console.log(favourites);

  useEffect(() => {
    document.title = "Favoriler";
  }, []);
  return (
    <>
      <Navbar />
      <Categories />
      <div className={styles.wrapper}>
        <header className={styles["categories-container"]}>
          <div className={styles.categories}>
            <div
              className={
                selectedCategory === "Favorilerim"
                  ? `${styles["category-item"]} ${styles["category-item-selected"]}`
                  : styles["category-item"]
              }
              onClick={() => setSelectedCategory("Favorilerim")}
            >
              <FontAwesomeIcon className={styles.icon} icon={faHeart} />
              <h1>Favorilerim</h1>
            </div>
            <div
              className={
                selectedCategory === "Koleksiyonlarım"
                  ? `${styles["category-item"]} ${styles["category-item-selected"]}`
                  : styles["category-item"]
              }
              onClick={() => setSelectedCategory("Koleksiyonlarım")}
            >
              <FontAwesomeIcon className={styles.icon} icon={faBookmark} />
              <h1>Koleksiyonlarım</h1>
            </div>
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Favorilerimde ara" />
            <FontAwesomeIcon
              icon={faSearch}
              className={styles["search-icon"]}
            />
          </div>
        </header>

        <section className={styles["main-content-container"]}>
          <Selects />
          <div className={styles.productsContainer}>
            {favourites.map((item) => (
              <FavProductItems key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default FavouriteProducts;
