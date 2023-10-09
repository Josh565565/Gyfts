import React from "react";
import styles from "./GiftBasket.module.css"; // Import the CSS module

function GiftBasket() {
  return (
    <div className={styles["gift-basket"]}>
      <h5 className={styles["basket-content"]}>Basket Content</h5>
      <ul className={styles["list-items"]}>
        <li className={styles["li"]}>Food Baskets</li>
        <li className={styles["li"]}>Fruit Baskets</li>
        <li className={styles["li"]}>Wine Baskets</li>
        <li className={styles["li"]}>Flower Baskets</li>
      </ul>
    </div>
  );
}

export default GiftBasket;
