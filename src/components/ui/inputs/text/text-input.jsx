import React, { useRef, useState } from "react";
import { useFormValidation } from "../../../hooks/formValidation";
import styles from "./text.module.css";

const TextInput = ({ text, placeholder, disabled }) => {
  const { value, handleChange, error, isValid, resetErrors, inputRef } =
    useFormValidation({});

  React.useEffect(() => {
    resetErrors();
  }, []);

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={!isValid ? styles.input : styles.warning}
          type="text"
          ref={inputRef}
          onChange={handleChange}
          onBlur={() => error}
          value={value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        <span className={error ? styles.error : styles.hide}>Ошибка</span>
      </label>
    </div>
  );
};

export default TextInput;
