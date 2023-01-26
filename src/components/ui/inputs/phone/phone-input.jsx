import React from "react";
import { useInput } from "../../../hooks/useInput";
import styles from "../text/text.module.css";

const PhoneInput = ({ text, placeholder, disabled }) => {
  const phone = useInput("", {
    isEmpty: true,
    isPhone: true,
  });
  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => phone.handleChange(e)}
          onBlur={(e) => phone.onBlur(e)}
          name="phone"
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
