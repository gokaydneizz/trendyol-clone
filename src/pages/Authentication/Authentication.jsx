import React, { useState } from "react";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import Register from "../../components/Register/Register";
import styles from "./Authentication.module.css";

const Authentication = () => {
  const [selectedBtn, setSelectedBtn] = useState("Login");

  return (
    <>
      <Navbar />
      <Categories />
      <div className={styles["auth-page-container"]}>
        <div className={styles.texts}>
          <h1>Merhaba,</h1>
          <p>Trendyol'a giriş yap veya hesap oluştur,indirimleri kaçırma.</p>
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => setSelectedBtn("Login")}
            className={
              selectedBtn === "Login"
                ? `${styles["auth-btn"]} ${styles.selected}`
                : styles["auth-btn"]
            }
          >
            Giriş Yap
          </button>
          <button
            onClick={() => setSelectedBtn("Register")}
            className={
              selectedBtn === "Register"
                ? `${styles["auth-btn"]} ${styles.selected}`
                : styles["auth-btn"]
            }
          >
            Üye Ol
          </button>
        </div>
        <div className={styles["form-container"]}>
          {selectedBtn === "Login" ? <Login /> : <Register />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authentication;
