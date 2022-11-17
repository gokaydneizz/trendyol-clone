import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <form>
        <div className={styles["form-item"]}>
          <label>E-Posta</label>
          <div className={styles["input-box"]}>
            <input type="text" />
          </div>
          <label>Şifre</label>
          <div className={styles["input-box"]}>
            <input type="text" />
          </div>
          <div className={styles["forgot-password"]}>Şifremi Unuttum</div>
          <button className={styles["submit-btn"]}>Giriş Yap</button>
        </div>
      </form>
      <div className={styles["social-buttons"]}>
        <div className={styles["social-btn"]}>
          <img
            src="https://iconarchive.com/download/i80444/uiconstock/socialmedia/Facebook.ico"
            alt="facebook-icon"
            className={styles.icon}
          />
          <div className={styles["social-text"]}>
            <span className={styles.brand}>Facebook</span>
            <span className={styles["login-text"]}>ile giriş yap</span>
          </div>
        </div>
        <div className={styles["social-btn"]}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Google_Plus_icon_%282015-2019%29.svg/1200px-Google_Plus_icon_%282015-2019%29.svg.png"
            alt="facebook-icon"
            className={styles.icon}
          />
          <div className={styles["social-text"]}>
            <span className={styles.brand}>Google</span>
            <span className={styles["login-text"]}>ile giriş yap</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
