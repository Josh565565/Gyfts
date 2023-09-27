import React from 'react';
import styles from "./HeaderStyle.module.css"; // Import the CSS module

import cart from "../Assets/cart.png";
import search from "../Assets/search-icon.png";

function Header() {
  return (
    <header className={styles.landingPageHeader}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>Gyfts.ng</div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Gift Basket</a></li>
            <li><a href="#">Gift Occasion</a></li>
          </ul>
        </nav>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.cartSection}>
          <div className={styles.cartIcon}>
            <img src={cart} alt="cart" />
          </div>
          <div className={styles.cartLabel}></div>
        </div>
        <div className={styles.searchInput}>
          <img className={styles.searchIcon} src={search} alt="search-icon" />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchTextInput}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
