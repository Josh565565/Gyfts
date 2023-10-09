import React, { useState } from 'react';
import styles from './GiftOccasionsDropdown.module.css';

function GiftOccasionsDropdown() {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? '' : dropdown));
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={`${styles.dropdownSection} ${activeDropdown === 'events' && styles.active}`}>
        <h3
          className={styles.sectionHeading}
          onClick={() => toggleDropdown('events')}
        >
          Events
        </h3>
        <ul className={`${styles.dropdownList} ${activeDropdown === 'events' && styles.active}`}>
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
      <div className={`${styles.dropdownSection} ${activeDropdown === 'seasonal' && styles.active}`}>
        <h3
          className={styles.sectionHeading}
          onClick={() => toggleDropdown('seasonal')}
        >
          Seasonal
        </h3>
        <ul className={`${styles.dropdownList} ${activeDropdown === 'seasonal' && styles.active}`}>
          <li>Mother's Day Gift</li>
          <li>Father's Day Gift</li>
          <li>Christmas Gift</li>
          <li>Valentine Day</li>
          <li>Easter Day</li>
        </ul>
      </div>
      <div className={`${styles.dropdownSection} ${activeDropdown === 'recipients' && styles.active}`}>
        <h3
          className={styles.sectionHeading}
          onClick={() => toggleDropdown('recipients')}
        >
          Recipients
        </h3>
        <ul className={`${styles.dropdownList} ${activeDropdown === 'recipients' && styles.active}`}>
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
