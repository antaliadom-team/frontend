import React, { useRef, useState } from "react";
import MaskedInput from "react-text-mask";
import styles from "./phone.module.css";

const PhoneInput = ({ text, fieldValue, onChange, disabled = false, currentPhone }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState("+7");
  const options = ["+7", "+90"];
  const placeholder = currentPhone ? `(${currentPhone.substring(2,5)}) ${currentPhone.substring(6)}`: "(999) 123-4567";
  const [newNumMasked, setNewNumMasked ] = useState('');

  const validate = () => {
    const value = inputRef.current.inputElement.value.match(/\d+/g).join("");
    setNewNumMasked(value);
    if (value.length < 10) {
      setError(true);
    } else {
      setError(false);
      setWarning("");
    };
  };

  const handleChange = () => {
    onChange(`${selected}${newNumMasked}`);
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
          onChange={() => {
            validate();
            handleChange();
          }}
          onBlur={() => error && setWarning(styles.warning)}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
          value={fieldValue}
        />
        <span className={error ? styles.error : styles.hide}>Введите корректный номер телефона</span>
      </label>
    </div>
  );
};

export default PhoneInput;
