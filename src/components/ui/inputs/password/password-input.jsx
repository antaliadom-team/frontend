import React, { useRef, useState } from "react";
import styles from "../text/text.module.css";

const PasswordInput =  ({ text, placeholder, disabled = false, ...rest }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setValue(() => e.target.value);
    const reg = /[/!$()*+.<>?^{|}_0-9]/;
    const match = inputRef?.current.value.match(reg);
    if (match) {
      setError(true)
    } else {
      setError(false);
      setWarning("");
    }
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
          {...rest}
        />
        <span className={error ? styles.error : styles.hide}>Неверный пароль</span>
      </label>
    </div>
  );
};

export default PasswordInput;
