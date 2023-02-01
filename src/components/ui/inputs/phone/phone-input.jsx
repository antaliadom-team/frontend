import React, { useRef, useState } from "react";
import styles from "./phone.module.css";

const PhoneInput = ({ text, placeholder, disabled = false }) => {

  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState("");

  const formattedPhoneNumber = (value) => {
    if (!value) return;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) {
      return `+ ${phoneNumber}`;
    } if (phoneNumberLength < 5 ) {
      return `+ ${phoneNumber.slice(0, 1)} ${phoneNumber.slice(1)}`;
    } else {
      return `+ ${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4)}`;
    }
  };

  const validate = (value) => {
    const phoneLength = value.length;
    if (!value.length) { return };
    if (phoneLength > 14 && phoneLength < 19) {
      setError(false);
      setWarning("");
    } else {
      setError(true);
    };
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue(formattedPhoneNumber(e.target.value))
    validate(value);
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={!warning ? styles.input : styles.warning}
          type="text"
          ref={inputRef}
          onChange={handleChange}
          onBlur={()=> error && setWarning(styles.warning)}
          value={value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        <span className={error ? styles.error : styles.hide}>Введите корректный номер телефона</span>
      </label>
    </div>
  );
};

export default PhoneInput;