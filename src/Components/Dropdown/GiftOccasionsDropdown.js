import React from 'react';
import styles from './GiftOccasionsDropdown.module.css';

function GiftOccasionsDropdown() {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownSection}>
        <h3 className={styles.sectionHeading}>Events</h3>
        <ul className={styles.dropdownList}>
        
          <li>Wedding Gifts</li>
          <li>Birthday Gifts</li>
          <li>Baby Gifts</li>
          <li>Get Well Gifts</li>
          <li>Congratulations Gifts</li>
          <li>Thank You Gifts</li>
          <li>Engagement Gifts</li>
          <li>Graduation Gifts</li>
        </ul>

      </div>
      <div className={styles.dropdownSection}>
        <h3 className={styles.sectionHeading}>Seasonal</h3>
        <ul className={styles.dropdownList}>
          <li>Mother's Day Gift</li>
          <li>Father's Day Gift</li>
          <li>Christmas Gift</li>
          <li>Valentine Day</li>
          <li>Easter Day</li>

          
        </ul>
      </div>
      <div className={styles.dropdownSection}>
        <h3 className={styles.sectionHeading}>Recipients</h3>
        <ul className={styles.dropdownList}>
          <li>Gift for Men</li>
          <li>Gift for Women</li>
          <li>Gift for Parent</li>
         <li>Gift for Children</li>
          <li>Gift for Friends</li>
        </ul>
      </div>
    </div>
  );
}

export default GiftOccasionsDropdown;
