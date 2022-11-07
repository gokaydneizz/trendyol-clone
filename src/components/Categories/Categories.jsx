import React, { useState } from "react";
import styles from "./Categories.module.css";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("KADIN");

  const categories = [
    "KADIN",
    "ERKEK",
    "ANNE & ÇOCUK",
    "EV & MOBİLYA",
    "SÜPERMARKET",
    "KOZMETİK",
    "AYAKKABI & ÇANTA",
    "SAAT & AKSESUAR",
    "ELEKTRONIK",
    "SPOR&OUTDOOR",
  ];

  return (
    <div className={styles["categories-container"]}>
      <ul className={styles["categories-list"]}>
        {categories.map((category, index) => (
          <li
            className={
              selectedCategory === category ? styles["category-item"] : ""
            }
            onClick={() => setSelectedCategory(category)}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
