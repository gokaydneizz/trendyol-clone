import React from "react";
import DetailCardWrapper from "../DetailCardWrapper/DetailCardWrapper";
import styles from "./DetailsPageSidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faChevronRight,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const DetailsPageSiderbar = ({ brandName }) => {
  return (
    <div className={styles["sidebar-container"]}>
      <DetailCardWrapper>
        <div className={styles.title}>ÜRÜNÜN KAMPANYALARI</div>
        <div className={styles.content}>
          <FontAwesomeIcon icon={faTag} className={styles.icon} />
          <p className={styles.description}>75 TL ve Üzeri Kargo Bedava</p>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles["right-icon"]}
          />
        </div>
      </DetailCardWrapper>
      <DetailCardWrapper>
        <div className={styles.brandDiv}>
          <span className={styles.brandName}> {brandName}</span>
          <img
            src="https://cdn.dsmcdn.com/indexing-sticker-stamp/stage/4b0d7ef1-8e8f-4c8f-b1c7-637e432ea2b4.png"
            alt="tick"
            className={styles["brand-icon"]}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <FontAwesomeIcon icon={faTag} className={styles.icon} />
            <div>
              <p className={styles.description}>Mağazayı Gör</p>
              <span className={styles.followers}>33.8B Takipçi</span>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles["right-icon"]}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <FontAwesomeIcon icon={faComment} className={styles.icon} />
            <p className={styles.description}>Ürün soruları</p>
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles["right-icon"]}
          />
        </div>
      </DetailCardWrapper>
    </div>
  );
};

export default DetailsPageSiderbar;
