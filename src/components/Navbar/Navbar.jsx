import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  return (
    <nav className={styles.navbar}>
      <div className={styles.imgBox}>
        <img
          onClick={() => navigate("/")}
          src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
          className="brand"
        />
      </div>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Aradığınız ürün,kategori veya markayı yazınız"
        />
        <FontAwesomeIcon icon={faSearch} className={styles["search-icon"]} />
      </div>
      <div className={styles.list}>
        <div className={`${styles["user-div"]} ${styles["listItem"]}`}>
          <FontAwesomeIcon icon={faUser} className={styles["list-icon"]} />{" "}
          Giriş Yap
          <div className={styles.dropdown}>
            <div className={styles["user-div-dropdown"]}>
              <button className={styles["login-btn"]}>Giriş Yap</button>
              <button className={styles["register-btn"]}>Üye Ol</button>
            </div>
          </div>
        </div>

        <div
          className={styles.listItem}
          onClick={() => navigate("/favourites")}
        >
          <FontAwesomeIcon icon={faHeart} className={styles["list-icon"]} />{" "}
          Favorilerim
        </div>
        <div
          className={`${styles["cart-div"]} ${styles.listItem}`}
          onClick={() => navigate("/cart")}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className={styles["list-icon"]}
          />{" "}
          Sepetim
          <div className={styles["cart-length-container"]}>
            <span className={styles.cartLength}>{cart.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
