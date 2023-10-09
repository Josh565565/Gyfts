import React, { useState } from "react";
import headerStyle from "./HeaderStyle.module.css";
import GiftBasket from "../Dropdown/GiftBasket";
import GiftOccasionsDropdown from "../Dropdown/GiftOccasionsDropdown";

import cart from "../Assets/cart.png";
import search from "../Assets/search-icon.png";
import menuOpen from "../Assets/images/menu-icon-open.png";

function Header() {
  // Basket dropdown start
  const [basketOpen, setBasketOpen] = useState(false);
  const toggleBasket = () => setBasketOpen(!basketOpen);

  // Gift Occasions Drop Down start
  const [occasionsOpen, setoccasionsOpen] = useState(false);
  const toggleoccasions = () => setoccasionsOpen(!occasionsOpen);
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
              <li className={headerStyle.basketCon}>
                <a onClick={toggleBasket} className={headerStyle.link} href="#">
                  Gift Basket
                </a>
                <div className={headerStyle.basketDropDownDiv}>
                  {basketOpen && <GiftBasket />}
                </div>
              </li>
              <li className={headerStyle.occasionsCon}>
                <a
                  onClick={toggleoccasions}
                  className={headerStyle.link}
                  href="#"
                >
                  Gift Occasion
                </a>
                <div className={headerStyle.occasionsDropDownDiv}>
                  {occasionsOpen && <GiftOccasionsDropdown />}
                </div>
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
