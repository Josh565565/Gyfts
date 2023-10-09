import React, { useState } from "react";
import styles from "./GiftOccasionsDropdown.module.css";

function GiftOccasionsDropdown() {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownSection}>
        <h3 className={styles.sectionHeading}>Events</h3>
        <h3 className={styles.sectionHeading}>Seasonal</h3>
        <h3 className={styles.sectionHeading}>Recipients</h3>
      </div>
      <div className={styles.listDiv}>
        <div className={styles.dropdownList1Div}>
          <ul className={styles.dropdownList}>
            <li className={styles.li}>Wedding Gifts</li>
            <li className={styles.li}>Birthday Gifts</li>
            <li className={styles.li}>Baby Gifts</li>
            <li className={styles.li}>Get Well Gifts</li>
            <li className={styles.li}>Congratulations Gifts</li>
            <li className={styles.li}>Thank You Gifts</li>
            <li className={styles.li}>Engagement Gifts</li>
            <li className={styles.li}>Graduation Gifts</li>
          </ul>
        </div>
        <div className={styles.dropdownList2Div}>
          <ul className={styles.dropdownList}>
            <li className={styles.li}>Mother's Day Gift</li>
            <li className={styles.li}>Father's Day Gift</li>
            <li className={styles.li}>Christmas Gift</li>
            <li className={styles.li}>Valentine's Day Gift</li>
            <li className={styles.li}>Easter Day Gift</li>
          </ul>
        </div>
        <div className={styles.dropdownList3Div}>
          <ul className={styles.dropdownList}>
            <li className={styles.li}>Gift for Men</li>
            <li className={styles.li}>Gift for Women</li>
            <li className={styles.li}>Gift for Parents</li>
            <li className={styles.li}>Gift for Children</li>
            <li className={styles.li}>Gift for Friends</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GiftOccasionsDropdown;
