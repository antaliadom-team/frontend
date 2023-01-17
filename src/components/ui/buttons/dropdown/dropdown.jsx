import React, { useRef, useState } from "react";
import styles from "./dropdown.module.css";
const Dropdown = ({ text, options, placeholder, width }) => {
  const dropdownRef = useRef();
  const [field, setField] = useState(placeholder);
  const [optionBox, setOptionBox] = useState(null);
  const handleDropdown = (e) => {
    e.preventDefault();
    dropdownRef.current.classList.toggle(styles.active);
  };
  const handleOption = (e) => {
    e.preventDefault();
    setOptionBox((prev) => {
      if (prev !== null) {
        optionBox.classList.remove(styles.activeBox)
      }
      return e.target.children[0]
    });

    e.target.children[0].classList.add(styles.activeBox);
    setField(e.target.textContent);
  };

  return (
    <div className={styles.dropdown} style={{width: width}} onClick={handleDropdown}>
      <span className={styles.text}>{text}</span>
      <button className={styles.button} ref={dropdownRef}>
        {field}
        <div className={styles.arrow} />
      </button>
      <div className={styles.menu}>
        {options.map((option, index) => (
          <div className={styles.option} onClick={handleOption} key={index}>
            <div className={styles.box} />
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
