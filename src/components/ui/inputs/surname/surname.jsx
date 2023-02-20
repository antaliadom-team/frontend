import React from "react";
import { useInput } from "../../../../hooks/use-input";
import styles from "../text/text.module.css";

const Surname = ({ nameInput, placeholder, disabled }) => {
  const surname = useInput("", {
    isSurname: true,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            surname.surnameError
              ? styles.input
              : `${styles.input} ${styles.warning}`
          }
          type="text"
          onChange={(e) => surname.handleChange(e)}
          onBlur={(e) => surname.onBlur(e)}
          name={nameInput}
          value={surname.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {surname.valueDirty && !surname.surnameError && (
          <span className={styles.error}>{surname.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default Surname;
