import React from 'react';
import styles from './GiftBasket.module.css'; // Import the CSS module

function GiftBasket() {
  return (
    <div className={styles['gift-basket']}> {/* Use the CSS module className */}
      <h5 className={styles['basket-content']}>Basket Content</h5>
      <ul className={styles['list-items']}> {/* Use the CSS module className */}
        <li>Food Baskets</li>
        <li>Fruit Baskets</li>
        <li>Wine Baskets</li>
        <li>Flower Baskets</li>
      </ul>
    </div>
  );
}

export default GiftBasket;
