import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import headerStyle from "./HeaderStyle.module.css";
import GiftBasket from "../Dropdown/GiftBasket";
import GiftOccasionsDropdown from "../Dropdown/GiftOccasionsDropdown";
import MobileDropDown from "../Dropdown/MobileDropDown";
import { useCart } from "react-use-cart";

import cart from "../Assets/cart.png";
import search from "../Assets/search-icon.png";
import menuOpen from "../Assets/images/menu-icon-open.png";
import CloseMenu from "../Assets/images/close-menu.svg";

function Header() {
  const { totalItems, cartTotal } = useCart();

  // Basket dropdown start
  const [basketOpen, setBasketOpen] = useState(false);
  const toggleBasket = () => setBasketOpen(!basketOpen);

  // Gift Occasions Drop Down start
  const [occasionsOpen, setOccasionsOpen] = useState(false);
  const toggleOccasions = () => setOccasionsOpen(!occasionsOpen);

  // Mobile dropdown start
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);
  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    setShowCloseMenu(!showCloseMenu);
  };

  // Refs for dropdowns
  const basketDropdownRef = useRef(null);
  const occasionsDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Add an event listener to close the dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        basketDropdownRef.current &&
        !basketDropdownRef.current.contains(event.target)
      ) {
        setBasketOpen(false);
      }
      if (
        occasionsDropdownRef.current &&
        !occasionsDropdownRef.current.contains(event.target)
      ) {
        setOccasionsOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
        setShowCloseMenu(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={headerStyle.landingPageHeaderContainer}>
      <header className={headerStyle.landingPageHeader}>
        <div className={headerStyle.leftSection}>
          <a href="">
            <Link to="/">
              <div className={headerStyle.logo}>Gyfts</div>
            </Link>
          </a>
          <nav>
            <ul className={headerStyle.ul}>
              <li>
                <Link to="/">
                  <a className={headerStyle.link} href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className={headerStyle.basketCon} ref={basketDropdownRef}>
                <a onClick={toggleBasket} className={headerStyle.link} href="#">
                  Gift Basket
                </a>
                <div className={headerStyle.basketDropDownDiv}>
                  {basketOpen && <GiftBasket />}
                </div>
              </li>
              <li
                className={headerStyle.occasionsCon}
                ref={occasionsDropdownRef}
              >
                <a
                  onClick={toggleOccasions}
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
              <Link to="/shoppingcart">
                <img src={cart} alt="cart" />
                <div className={headerStyle.cartupdateDiv}>
                  <p className={headerStyle.cartupdate}>{totalItems}</p>
                </div>
              </Link>
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
          <div className={headerStyle.menuOpenDiv} ref={mobileDropdownRef}>
            {showCloseMenu ? (
              <img
                onClick={toggleMobile}
                className={headerStyle.closeMenuImg}
                src={CloseMenu}
                alt=""
              />
            ) : (
              <img
                onClick={toggleMobile}
                className={headerStyle.menuOpenImg}
                src={menuOpen}
                alt=""
              />
            )}
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
