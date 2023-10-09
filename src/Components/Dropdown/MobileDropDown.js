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
          <li>Food Basket</li>
          <li>Fruit Basket</li>
          <li>Wine Basket</li>
          <li>Flower Basket</li>
        </ul>
      </div>
    </div>
  );
}

export default MobileDropDown;
