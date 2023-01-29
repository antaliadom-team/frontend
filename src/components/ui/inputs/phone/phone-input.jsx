import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "../text/text.module.css";

const PhoneInput = ({ nameInput, placeholder, disabled }) => {
  const phone = useInput("", {
    isEmpty: true,
    isPhone: true,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            phone.validationMessage
              ? `${styles.input} ${styles.warning}`
              : styles.input
          }
          type="text"
          onChange={(e) => phone.handleChange(e)}
          onBlur={(e) => phone.onBlur(e)}
          name={nameInput}
          value={phone.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {phone.valueDirty && phone.validationMessage && (
          <span className={styles.error}>{phone.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default PhoneInput;
