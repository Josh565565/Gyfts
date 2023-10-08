import React from "react";
import headerStyle from "./HeaderStyle.module.css"; // Import the CSS module

import cart from "../Assets/cart.png";
import search from "../Assets/search-icon.png";
import menuOpen from "../Assets/images/menu-icon-open.png";

function Header() {
  return (
    <div className={headerStyle.landingPageHeaderContainer}>
      <header className={headerStyle.landingPageHeader}>
        <div className={headerStyle.leftSection}>
          <a href="">
            <div className={headerStyle.logo}>Gyfts</div>
          </a>
          <nav>
            <ul className={headerStyle.ul}>
              <li>
                <a className={headerStyle.link} href="#">
                  Home
                </a>
              </li>
              <li>
                <a className={headerStyle.link} href="#">
                  Gift Basket
                </a>
              </li>
              <li>
                <a className={headerStyle.link} href="#">
                  Gift Occasion
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={headerStyle.rightSection}>
          <div className={headerStyle.cartSection}>
            <div className={headerStyle.cartIcon}>
              <img src={cart} alt="cart" />
            </div>
            <div className={headerStyle.cartLabel}></div>
          </div>
          <div className={headerStyle.searchInput}>
            <img
              className={headerStyle.searchIcon}
              src={search}
              alt="search-icon"
            />
            <input
              type="text"
              placeholder="Search"
              className={headerStyle.searchTextInput}
            />
          </div>
          <div className={headerStyle.menueOpenDiv}>
            <img className={headerStyle.menueOpenImg} src={menuOpen} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;