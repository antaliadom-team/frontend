import React, { useEffect, useRef, useState } from "react";
import MaskedInput from "react-text-mask";
import styles from "./phone.module.css";

const PhoneInput = ({ text, disabled = false, currentPhone = null }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState("+7");
  const options = ["+7", "+90"];
  const placeholder = currentPhone ? currentPhone.substring(2) : "(999) 123-4567";

  const validate = () => {
    const value = inputRef.current.inputElement.value.match(/\d+/g).join("");
    if (value.length < 10) {
      setError(true);
    } else {
      setError(false);
      setWarning("");
    }
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <div className={styles.region_code} onClick={() => setDropdown(!dropdown)}>
          {selected}
          <span className={styles.arrow}></span>
        </div>
        {dropdown && (
          <div className={styles.region_options}>
            {options.map((option) => (
              <div
                onClick={() => {
                  setSelected(option);
                  setDropdown(!dropdown);
                }}
                className={styles.region_item}>
                {option}
              </div>
            ))}
          </div>
        )}
        <MaskedInput
          mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
          className={!warning ? styles.input : styles.warning}
          ref={inputRef}
          onChange={validate}
          onBlur={() => error && setWarning(styles.warning)}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        <span className={error ? styles.error : styles.hide}>Введите корректный номер телефона</span>
      </label>
    </div>
  );
};

export default PhoneInput;
