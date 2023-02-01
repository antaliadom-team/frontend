import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "./text.module.css";

const TextInput = ({ nameInput, placeholder, disabled }) => {
  const name = useInput("", {
    isName: true,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            name.nameError ? styles.input : `${styles.input} ${styles.warning}`
          }
          type="text"
          onChange={(e) => name.handleChange(e)}
          onBlur={(e) => name.onBlur(e)}
          name={nameInput}
          value={name.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {name.valueDirty && !name.nameError && (
          <span className={styles.error}>{name.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default TextInput;
