import React, { useState, useRef, useEffect } from 'react';
import styles from './dropdown.module.css';

const Dropdown = ({ text, options, required }) => {

  const dropdownRef = useRef();
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const handleDropdown = (e) => {
    if (e.target === e.currentTarget) {
      dropdownRef.current.classList.toggle(styles.active);
      setIsOpened(!isOpened);
    }
  };

  const handleSelectOption = (e) => {
    e.target.classList.toggle(styles.checked);
    setPlaceholder(e.target.textContent);
  };

  useEffect(() => {
    const closeOnOverlay = (e) => {
      if (!e.target.classList.contains(styles.active) && !e.target.classList.contains(styles.option)) {
        dropdownRef.current.classList.remove(styles.active);
        setIsOpened(false);
      }
    }
    window.addEventListener('click', closeOnOverlay);
    return () => {
      window.removeEventListener('click', closeOnOverlay);
    }
  }, []);

  return(
    <label className={styles.label}>{text}
      <div
        className={!warning ? styles.dropdown : styles.warning}
        onClick={handleDropdown}
        ref={dropdownRef}
        onBlur={()=> error && setWarning(styles.warning)}
      >
        <div className={styles.arrow} />
        {placeholder ? placeholder : text}
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li className={styles.option} 
              key={index} 
              onClick={handleSelectOption}
            >{option}</li>
          ))}
        </ul>
      </div>
      { required 
        ? (<span className={error ? styles.error : styles.hide}>Ошибка</span>) 
        : (<span className={styles.hide}></span>)
      }
    </label>
  )
};

export default Dropdown;