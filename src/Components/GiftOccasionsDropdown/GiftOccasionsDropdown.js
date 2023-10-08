import React from 'react';
import styles from './GiftOccasionsDropdown.module.css'; // Import your CSS module
function GiftOccasionsDropdown() {
  return (
    <select className= {style.dropdownContainer}>
      <optgroup label="Event">
        <option value="wedding">Wedding Gift</option>
        <option value="birthday">Birthday Gift</option>
        <option value="baby">Baby Gift</option>
        <option value="graduation">Graduation Gift</option>
      </optgroup>
      <optgroup label="Seasonal">
        <option value="mothers-day">Mother's Day Gift</option>
        <option value="fathers-day">Father's Day Gift</option>
        <option value="christmas">Christmas Gift</option>
      </optgroup>
      <optgroup label="Recipient">
        <option value="men">Gift for Men</option>
        <option value="women">Gift for Women</option>
        <option value="children">Gift for Children</option>
      </optgroup>
    </select>
  );
}

export default GiftOccasionsDropdown;
