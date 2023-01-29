import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "./text.module.css";

const TextInput = ({ nameInput, placeholder, disabled }) => {
  const name = useInput("", {
    isEmpty: false,
    isName: true,
    maxLength: 25,
  });
  console.log(name.validationMessage);
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            name.validationMessage
              ? `${styles.input} ${styles.warning}`
              : styles.input
          }
          type="text"
          onChange={(e) => name.handleChange(e)}
          onBlur={(e) => name.onBlur(e)}
          name={nameInput}
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
