import React, { useState } from "react";
import dropstyle from "./MobileDropDown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome

function MobileDropDown() {
  const [showGiftBaskets, setShowGiftBaskets] = useState(false);
  const [showGiftOccasions, setShowGiftOccasions] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showSeasonal, setShowSeasonal] = useState(false);
  const [showRecipients, setShowRecipients] = useState(false);

  const toggleGiftBaskets = () => {
    setShowGiftBaskets(!showGiftBaskets);
  };

  const toggleGiftOccasions = () => {
    setShowGiftOccasions(!showGiftOccasions);
  };

  const toggleEvents = () => {
    setShowEvents(!showEvents);
  };

  const toggleSeasonal = () => {
    setShowSeasonal(!showSeasonal);
  };

  const toggleRecipients = () => {
    setShowRecipients(!showRecipients);
  };

  return (
    <div className={dropstyle.container}>
      <div className={dropstyle.contentDiv}>
        <h3 className={dropstyle.content}>Content</h3>
      </div>
      <div className={dropstyle.item1Div}>
        <h4 className={dropstyle.item1Header} onClick={toggleGiftBaskets}>
          Gift Baskets{" "}
          <FontAwesomeIcon
            icon={showGiftBaskets ? "angle-down" : "angle-right"} // Use the FontAwesome icon
          />
        </h4>
        {showGiftBaskets && (
          <ul className={dropstyle.item1}>
            <li className={dropstyle.li}>Food Basket</li>
            <li className={dropstyle.li}>Fruit Basket</li>
            <li className={dropstyle.li}>Wine Basket</li>
            <li className={dropstyle.li}>Flower Basket</li>
          </ul>
        )}
      </div>
      <div className={dropstyle.giftOccasionsDiv}>
        <h4 className={dropstyle.occasionsHeader} onClick={toggleGiftOccasions}>
          <span className={dropstyle.occasionsHeaderSpan}>Gift Occasions</span>
          <FontAwesomeIcon
            icon={showGiftOccasions ? "angle-down" : "angle-right"} // Use the FontAwesome icon
          />
        </h4>
        {showGiftOccasions && (
          <div>
            <h4 className={dropstyle.item1Header} onClick={toggleEvents}>
              Events{" "}
              <FontAwesomeIcon
                icon={showEvents ? "angle-down" : "angle-right"} // Use the FontAwesome icon
              />
            </h4>
            {showEvents && (
              <ul className={dropstyle.item1}>
                <li className={dropstyle.li}>Wedding Gifts</li>
                <li className={dropstyle.li}>Birthday Gifts</li>
                <li className={dropstyle.li}>Baby Gifts</li>
                <li className={dropstyle.li}>Get Well Gifts</li>
                <li className={dropstyle.li}>Congratulations Gifts</li>
                <li className={dropstyle.li}>Thank You Gifts</li>
                <li className={dropstyle.li}>Engagement Gifts</li>
                <li className={dropstyle.li}>Graduation Gifts</li>
              </ul>
            )}
            <h4 className={dropstyle.item1Header} onClick={toggleSeasonal}>
              Seasonal{" "}
              <FontAwesomeIcon
                icon={showSeasonal ? "angle-down" : "angle-right"} // Use the FontAwesome icon
              />
            </h4>
            {showSeasonal && (
              <ul className={dropstyle.item1}>
                <li className={dropstyle.li}>Mother’s Day Gifts</li>
                <li className={dropstyle.li}>Father’s Day Gifts</li>
                <li className={dropstyle.li}>Christmas Gifts</li>
                <li className={dropstyle.li}>Valentine’s Day Gifts</li>
                <li className={dropstyle.li}>Easter Gifts</li>
              </ul>
            )}
            <h4 className={dropstyle.item1Header} onClick={toggleRecipients}>
              Recipients{" "}
              <FontAwesomeIcon
                icon={showRecipients ? "angle-down" : "angle-right"} // Use the FontAwesome icon
              />
            </h4>
            {showRecipients && (
              <ul className={dropstyle.item1}>
                <li className={dropstyle.li}>Gifts for Men</li>
                <li className={dropstyle.li}>Gifts for Women</li>
                <li className={dropstyle.li}>Gifts for Parents</li>
                <li className={dropstyle.li}>Gifts for Children</li>
                <li className={dropstyle.li}>Gifts for Friends</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileDropDown;
