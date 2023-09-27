import React from 'react';
import styles from "./FooterStyle.module.css"; // Import the CSS module

import call from "../Assets/call.png";
import Vector from "../Assets/Vector.svg";
import facebook from "../Assets/facebook-icon.png";
import instagram from "../Assets/instagram-icon.png";
import twitter from "../Assets/twitter-icon.png";
import linkedin from "../Assets/linkdln-icon.png";

const Footer = () => {
  return (
    <footer className={styles["landing-page-footer"]}>
      <div className={styles["left-section"]}>
        <div className={styles["gifts"]}>
          <p className={styles["logo"]}>Gyft.ng</p>
          <p>We offer a wide selection of unique
          nd high-quality gifts for every occasion</p>
        </div>
        <p>copyrights &copy;2023 Gifts.ng. All rights reserved</p>
      </div>
      <div className={styles["middle-section"]}>
        <div className={styles["support"]}>
          <p>Support</p>
          <p>
            <img className={styles["call-icon"]} src={call} alt="Call Icon" /> +23470655432124
          </p>
          <p>
            <img className={styles["email-icon"]} src={Vector} alt="Vector Icon" /> officialgyfts24@gmail.com
          </p>
        </div>
        <p>Social Links</p>
        <div className={styles["social-links"]}>
          
          <a href="https://www.facebook.com/sample" target="_blank" rel="noopener noreferrer">
            <img className={styles["social-icon"]} src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/sample" target="_blank" rel="noopener noreferrer">
          <img className={styles["social-icon"]} src={instagram} alt="Instagram Icon" />
          </a>
          <a href="https://www.twitter.com/sample" target="_blank" rel="noopener noreferrer">
          <img className={styles["social-icon"]} src={twitter} alt="Twitter Icon" />
            </a>
            <a href="https://www.linkedin.com/sample" target="_blank" rel="noopener noreferrer">
          <img className={styles["social-icon"]} src={linkedin} alt="LinkedIn Icon" />
          </a>
          </div>
      </div>
      <div className={styles["right-section"]}>
        <p>Subscribe to our Newsletter</p>
        <p className={styles["latest"]}>For Latest News and updates</p>
        <form>
          <input type="email" placeholder="Email Address" /> <br></br>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
