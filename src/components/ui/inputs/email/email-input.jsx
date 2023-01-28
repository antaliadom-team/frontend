import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "../text/text.module.css";

const EmailInput = ({ text, placeholder, disabled }) => {
  const email = useInput("", {
    isEmpty: true,
    isEmail: true,
  });

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={
            email.validationMessage
              ? `${styles.input} ${styles.warning}`
              : styles.input
          }
          type="text"
          onChange={(e) => email.handleChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name="email"
          value={email.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {email.valueDirty && email.validationMessage && (
          <span className={styles.error}>{email.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default EmailInput;
