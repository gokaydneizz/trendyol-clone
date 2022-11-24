import React, { useState } from "react";
import styles from "./Register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const Register = () => {
  const [gender, setGender] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>E-Posta</label>
        <div className={styles["input-box"]}>
          <input type="text" />
        </div>
        <label>Şifre</label>
        <div className={styles["input-box"]}>
          <input type={showPassword ? "text" : "password"} />
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((show) => !show)}
            icon={showPassword ? faEye : faEyeSlash}
          />
        </div>
        <div className={styles.control}>
          Şifreniz en az 7 karakter olmalı,harf ve rakam içermelidir.
        </div>
        <div className={styles["gender-text"]}>Cinsiyet(Opsiyonel)</div>
        <div className={styles["gender-buttons"]}>
          <button
            onClick={() => setGender("Kadın")}
            className={
              gender === "Kadın"
                ? `${styles["gender-item"]} ${styles.selected}`
                : styles["gender-item"]
            }
          >
            Kadın
          </button>
          <button
            className={
              gender === "Erkek"
                ? `${styles["gender-item"]} ${styles.selected}`
                : styles["gender-item"]
            }
            onClick={() => setGender("Erkek")}
          >
            Erkek
          </button>
        </div>
        <button className={styles["submit-btn"]}>Üye Ol</button>
        <div style={{ fontSize: "12px", paddingTop: "5px", color: "gray" }}>
          Üye Ol'a basarak{" "}
          <span style={{ textDecoration: "underline", cursor: "pointer" }}>
            Üyelik Koşullarını
          </span>{" "}
          kabul ediyorum.
        </div>
        <div className={styles["checkbox-container"]}>
          <div className={styles["checkbox-item"]}>
            <input type="checkbox" style={{ width: "50px", height: "50px" }} />
            <span>
              Kampanyalardan haberdar olabilmem için kişisel verilerimin
              işlenmesini ve tarafıma elektronik ileti gönderilmesini kabul
              ediyorum.
            </span>
          </div>
          <div className={styles["checkbox-item"]}>
            <input type="checkbox" />
            <span>
              Kişisel verilerimin işlenmesine yönelik{" "}
              <span style={{ textDecoration: "underline" }}>
                aydınlatma metnini
              </span>{" "}
              okudum ve anladım.
            </span>
          </div>
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
            <span className={styles["login-text"]}>ile üye ol.</span>
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
            <span className={styles["login-text"]}>ile üye ol.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
