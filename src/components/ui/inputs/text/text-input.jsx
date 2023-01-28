import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "./text.module.css";

const TextInput = ({ text, placeholder, disabled }) => {
  const name = useInput("", {
    isEmpty: true,
    isName: true,
    maxLength: 25,
  });

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={
            name.validationMessage
              ? `${styles.input} ${styles.warning}`
              : styles.input
          }
          type="text"
          onChange={(e) => name.handleChange(e)}
          onBlur={(e) => name.onBlur(e)}
          name="name"
          value={name.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {name.valueDirty && name.validationMessage && (
          <span className={styles.error}>{name.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default TextInput;
