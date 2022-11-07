import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className={styles.lists}>
        <ul>
          <li>
            <h1>Trendyol</h1>
          </li>
          <li>
            <a href="#">Biz Kimiz</a>
          </li>
          <li>
            <a href="#">Kariyer</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
          <li>
            <a href="#">Trendyol'da Satış Yap</a>
          </li>
          <li>
            <a href="#">Kurumsal Hediye Çeki</a>
          </li>
          <li>
            <a href="#">Güvenli Alışveriş</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>About us</h1>
          </li>
          <li>
            <a href="#">Who we are</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Kampanyalar</h1>
          </li>
          <li>
            <a href="#">Aktif Kampanyalar</a>
          </li>
          <li>
            <a href="#">Elite Üyelik</a>
          </li>
          <li>
            <a href="#">Hediye Fikirleri</a>
          </li>
          <li>
            <a href="#">Trendyol Fırsatları</a>
          </li>
        </ul>
        <ul>
          <li>
            <h1>Yardım</h1>
          </li>
          <li>
            <a href="#">Sıkça Sorulan Sorular</a>
          </li>
          <li>
            <a href="#">Canlı Yardım</a>
          </li>
          <li>
            <a href="#">Nasıl İade Edebilirim</a>
          </li>
          <li>
            <a href="#">İşlem Rehberi</a>
          </li>
        </ul>
        <ul className={styles.payments}>
          <li>
            <img
              src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.dsmcdn.com/web/production/footer-master-card.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://cdn.dsmcdn.com/web/production/footer-amex.png"
              alt=""
            />
          </li>
        </ul>

        <ul className={styles.socials}>
          <li>
            <h1 style={{ fontSize: "25px" }}>Mobil Uygulamalar</h1>
          </li>
          <li>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/02/App-Store-Symbol.png"
              alt=""
            />
          </li>
          <li style={{ marginTop: "-15px" }}>
            <img
              src="https://www.honkmobile.com/wp-content/uploads/2021/11/GooglePlay_Badge_-_High_Res.png"
              alt=""
            />
          </li>
          <li>
            <img
              src="https://hellopaisa.co.za/hellopaisa-2021/wp-content/uploads/2021/06/huawei-Badge-Black.png"
              alt=""
            />
          </li>
        </ul>
        <div>
          <h1 style={{ fontSize: "25px", paddingBottom: "20px" }}>
            Sosyal Medya
          </h1>
          <ul style={{ display: "flex", flexDirection: "row" }}>
            <li>
              <img
                style={{ width: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ width: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ width: "25px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1245px-Twitter-logo.svg.png"
                alt=""
              />
            </li>
            <li>
              <img
                style={{ width: "35px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className={styles.country}>
          <button>Ülke değiştir</button>
          <img
            src="https://cdn.dsmcdn.com/web/production/etbis-qr.png"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
