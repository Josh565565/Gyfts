import React from 'react';
import styles from "./FooterStyle.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles["landing-page-footer"]}>
      <div className={styles["left-section"]}>
        <div>
          <p>Gyft.ng</p>
          <p>We offer a wide selection of unique</p>
          <p>And high quality gifts for everyone</p>
        </div>
        <p>&copy;2023 Gifts.ng. All rights reserved</p>
      </div>
      <div className={styles["middle-section"]}>
        <div className={styles["support"]}>
          <p>Support</p>
          <p>
            <i className="fas fa-phone"></i> +23470655432124
          </p>
          <p>
            <img src="email-icon.png" alt="Email Icon" /> officialgyfts24@gmail.com
          </p>
        </div>
        <div className={styles["social-links"]}>
          {/* Sample link to Facebook */}
          <a href="https://www.facebook.com/sample" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          {/* Include an image for the social media section */}
          <img src="social-icon.png" alt="Social Icon" />
        </div>
      </div>
      <div className={styles["right-section"]}>
        <p>Subscribe to our Newsletter</p>
        <p>For Latest News and updates</p>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
