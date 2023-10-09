import React from "react";
import dropstyle from "./MobileDropDown.module.css";

function MobileDropDown() {
  return (
    <div className={dropstyle.container}>
      <div className={dropstyle.contentDiv}>
        <h3 className={dropstyle.content}>Content</h3>
      </div>
      <div className={dropstyle.item1Div}>
        <h4 className={dropstyle.item1Header}>Gift Baskets</h4>
        <ul className={dropstyle.item1}>
          <li className={dropstyle.li}>Food Basket</li>
          <li className={dropstyle.li}>Fruit Basket</li>
          <li className={dropstyle.li}>Wine Basket</li>
          <li className={dropstyle.li}>Flower Basket</li>
        </ul>
      </div>
      <div className={dropstyle.giftOccasionsDiv}>
      <h4 className={dropstyle.occasionsHeader}>Gift Occasions</h4>
        <div>
          <h4 className={dropstyle.item1Header}>Events</h4>
          <ul className={dropstyle.item1}>
            <li className={dropstyle.li}>Food Basket</li>
            <li className={dropstyle.li}>Fruit Basket</li>
            <li className={dropstyle.li}>Wine Basket</li>
            <li className={dropstyle.li}>Flower Basket</li>
          </ul>
        </div>
        <div>
          <h4 className={dropstyle.item1Header}>Seasonal</h4>
          <ul className={dropstyle.item1}>
            <li className={dropstyle.li}>Food Basket</li>
            <li className={dropstyle.li}>Fruit Basket</li>
            <li className={dropstyle.li}>Wine Basket</li>
            <li className={dropstyle.li}>Flower Basket</li>
          </ul>
        </div>
        <div>
          <h4 className={dropstyle.item1Header}>Recipients</h4>
          <ul className={dropstyle.item1}>
            <li className={dropstyle.li}>Food Basket</li>
            <li className={dropstyle.li}>Fruit Basket</li>
            <li className={dropstyle.li}>Wine Basket</li>
            <li className={dropstyle.li}>Flower Basket</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileDropDown;
