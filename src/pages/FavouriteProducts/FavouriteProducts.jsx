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
import Selects from "../../components/Selects/Selects";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import NoFavourite from "../../components/NoFavourite/NoFavourite";

const FavouriteProducts = () => {
  const favourites = useSelector((state) => state.favourites);

  const [selectedCategory, setSelectedCategory] = useState("Favorilerim");

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
          {favourites.length > 0 ? (
            <div className={styles.productsContainer}>
              {favourites.map((item) => (
                <Product data={item} key={item.id} />
              ))}
            </div>
          ) : (
            <NoFavourite />
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default FavouriteProducts;
