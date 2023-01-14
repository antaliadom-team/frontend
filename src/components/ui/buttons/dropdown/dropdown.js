import React, { useRef, useState } from "react";
import styles from "./dropdown.module.css";
const Dropdown = () => {
  const dropdownRef = useRef();
  const [field, setField] = useState("Локация");
  const handleDropdown = () => {
      dropdownRef.current.classList.toggle(styles.active);
  };
  const handleOption = (e) => {
    e.target.children[0].classList.toggle(styles.activeBox);
    setField(e.target.textContent);
  };

  return (
    <div className={styles.dropdown} onClick={handleDropdown}>
      <button className={styles.button} ref={dropdownRef}>
        {field} <div className={styles.arrow} />
      </button>
      <div className={styles.menu}>
        <div className={styles.option} onClick={handleOption}>
          <div className={styles.box} />
          content 1
        </div>
        <div className={styles.option} onClick={handleOption}>
          <div className={styles.box} />
          content 2
        </div>
        <div className={styles.option} onClick={handleOption}>
          <div className={styles.box} />
          content 3
        </div>
        <div className={styles.option} onClick={handleOption}>
          <div className={styles.box} />
          content 4
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
