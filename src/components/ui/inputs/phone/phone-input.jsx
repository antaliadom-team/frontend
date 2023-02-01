import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "../text/text.module.css";

const PhoneInput = ({ nameInput, placeholder, disabled }) => {
  const phone = useInput("", {
    isPhone: true,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            phone.phoneError
              ? styles.input
              : `${styles.input} ${styles.warning}`
          }
          type="text"
          onChange={(e) => phone.handleChange(e)}
          onBlur={(e) => phone.onBlur(e)}
          name={nameInput}
          value={phone.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {phone.valueDirty && !phone.phoneError && (
          <span className={styles.error}>{phone.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default PhoneInput;
