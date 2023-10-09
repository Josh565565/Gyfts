import React, { useState } from "react";
import { Link } from "react-router-dom";
import headerStyle from "./HeaderStyle.module.css";
import GiftBasket from "../Dropdown/GiftBasket";
import GiftOccasionsDropdown from "../Dropdown/GiftOccasionsDropdown";
import MobileDropDown from "../Dropdown/MobileDropDown";

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

  // Gift Occasions Drop Down start
  const [mobileOpen, setmobileOpen] = useState(false);
  const togglemobile = () => setmobileOpen(!mobileOpen);
  return (
    <div className={headerStyle.landingPageHeaderContainer}>
      <header className={headerStyle.landingPageHeader}>
        <div className={headerStyle.leftSection}>
          <a href="">
            <Link to="/"><div className={headerStyle.logo}>Gyfts</div></Link>
          </a>
          <nav>
            <ul className={headerStyle.ul}>
              <li>
                <Link to="/">
                <a className={headerStyle.link} href="#">
                  Home
                </a></Link>
                
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
             <Link to="/shoppingcart"><img src={cart} alt="cart" /></Link>
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
            <img onClick={togglemobile} className={headerStyle.menueOpenImg} src={menuOpen} alt="" />
            <div className={headerStyle.mobileDropDownDiv}>
                  {mobileOpen && <MobileDropDown />}
                </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
