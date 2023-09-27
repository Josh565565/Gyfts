import React from 'react';
import styles from './LandingPageStyle.module.css'; // import css modules
import cart from '../Assets/cart.png';
import birthday from '../Assets/birthday.png';
import amazon from '../Assets/amazon.png';
import paystack from '../Assets/paystack.png';
import bolt from '../Assets/bolt.png';
import ClockIconImage from '../Assets/clock.svg'; // Import the clock icon image
import BikeIconImage from '../Assets/bike.svg'; // Import the bike icon image
import policy from '../Assets/policy.svg'; // Import the gift icon image
import provision from '../Assets/provision.svg';
import skincare from '../Assets/skincare.svg';
import bucketwine from '../Assets/bucketwine.svg';
import roseImage from '../Assets/roseImage.svg';
import flowerImage from '../Assets/flowerImage.svg';
import snacks from '../Assets/snacks.svg';
import congratulationGift from'../Assets/congratulationGift.svg';

function LandingPage() {
  return (
    <div className={styles['main-container']}>
      <div className={styles['content-box']}>
        <h1>Special Birthday Offer</h1>
        <p>Shop now and have 10% off your first order. Use the code BIRTHDAY10</p>

        <button className={styles['shop-now-button']}>
          <img src={cart} alt="Cart Icon" className={styles['cart-icon']} />
          Shop Now
        </button>
        
      </div>
      <div className={styles['birthday']}>
            <img src={birthday} alt="birthday" />
          </div>
      <div className={styles['payment-container']}>
        <div className={styles['payment-options']}>
          <div className={styles['payment-option']}>
            <img src={amazon} alt="Amazon" />
          </div>
          <div className={styles['payment-option']}>
            <img src={paystack} alt="Paystack" />
          </div>
          <div className={styles['payment-option']}>
            <img src={bolt} alt="Bolt" />
          </div>
        </div>
      </div>
      <div className={styles['track-service']}>
        <h1>Track Service</h1>
        <p>The service will help you track where your order is.</p>
        <form>
          <div className={styles['input-container']}>
            <input type="text" placeholder="Enter tracking ID" className={styles['input-box']} />
            <div className={styles['blue-bg']}>
              <p className={styles['track-id-text']}>Track ID</p>
            </div>
          </div>
        </form>
      </div>
      <div className={styles['product-container-one']}>
        <p>Trending Categories</p>
        <p className={styles['product-name']}>Wedding Gift </p>
        <div className={styles['product-box']}>
        <div className={styles['bucketwine']}>
            <img src={bucketwine} alt="wine" />
          </div>
       </div>

        <div className={styles['product-box']}>
        <div className={styles['provision']}>
        <p className={styles['product-name']}>Food Basket </p>
            <img src={provision} alt="provision" />
          </div>
          
    </div>
        <div className={styles['product-box']}>
        <div className={styles['skincare']}>
        <p className={styles['product-name']}>Gift for Women </p>
            <img src={skincare} alt="skincare" />
          </div>
          
        </div>
      </div>

      <div className={styles['product-container-two']}>
        <p>Popular Categories</p>
        <p className={styles['product-name']}>Birthday Gift </p>
        <div className={styles['Flower-Gift']}>
        <div className={styles['flowerImage']}>
            <img src={flowerImage} alt="flower" />
          </div>
       </div>

        <div className={styles['product-box']}>
        <div className={styles['snacks-Gift']}>
        <p className={styles['product-name']}>Anniversary Gift </p>
            <img src={snacks} alt="snacks" />
          </div>
          
    </div>
        <div className={styles['product-box']}>
        <div className={styles['congratulation']}>
        <p className={styles['product-name']}>Congratulation Gift </p>
            <img src={congratulationGift} alt="congratulation" />
          </div>
          
        </div>
      </div>



      <div className={styles['rose-container']}>
      <img src={roseImage} alt="Rose" className={styles['rose-image']} />
      <div className={styles['rose-content']}>
        <h2>Shop Flowers With Us</h2>
        <p>Flowers Gift Basket</p>
        <p>Thanks for shopping with us. You are welcome!</p>
        <button className={styles['shop-now-button']}>
          <img src={cart} alt="Cart Icon" className={styles['cart-icon']} />
          Shop Now
        </button>
      </div>
      </div>

      
      <div className={styles['product-container-two']}>
        <p>Top Picks</p>
        
        <div className={styles['product-box']}>
        <div className={styles['bucketwine']}>
            <img src={bucketwine} alt="wine" />
          </div>
          <p className={styles['product-name']}>Special Wedding Hamper </p>
          <p className={styles['product-price']}>₦30,000</p>
          <button className={styles['add-to-cart-button']}>Add to Cart</button>
        </div>
        <div className={styles['product-box']}>
        <div className={styles['provision']}>
            <img src={provision} alt="provision" />
          </div>
          <p className={styles['product-name']}>Beauty Gift Basket</p>
          <p className={styles['product-price']}>₦25,000</p>
          <button className={styles['add-to-cart-button']}>Add to Cart</button>
        </div>
        <div className={styles['product-box']}>
        <div className={styles['skincare']}>
            <img src={skincare} alt="skincare" />
          </div>
          <p className={styles['product-name']}>Gift for Her</p>
          <p className={styles['product-price']}>₦15,000</p>
          <button className={styles['add-to-cart-button']}>Add to Cart</button>
        </div>
      </div>
      <div className={styles['rectangular-container']}>
        <div className={styles['schedule-item']}>
          <img src={ClockIconImage} alt="Clock Icon" />
          <h2>Schedule Delivery</h2>
          <p>You can schedule delivery for a specific date.</p>
        </div>
        <div className={styles['free-delivery-item']}>
          <img src={BikeIconImage} alt="Bike Icon" />
          <h2>Free Delivery</h2>
          <p>You can schedule delivery for a specific date.</p>
        </div>
        <div className={styles['gift-item']}>
          <img src={policy} alt="Policy Icon" />
          <h2>Schedule Delivery</h2>
          <p>You can schedule delivery for a specific date.</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
