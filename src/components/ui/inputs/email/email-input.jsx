import React, { useState } from "react";
import { useEffect } from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "../text/text.module.css";

const EmailInput = ({ nameInput, placeholder, disabled, validEmail }) => {
  const email = useInput("", {
    isEmail: true,
  });

  useEffect(() => {
    validEmail(email.emailError);
  }, [email.emailError]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            email.emailError
              ? styles.input
              : `${styles.input} ${styles.warning}`
          }
          type="text"
          onChange={(e) => email.handleChange(e)}
          onBlur={(e) => email.onBlur(e)}
          name={nameInput}
          value={email.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {email.valueDirty && !email.emailError && (
          <span className={styles.error}>{email.validationMessage}</span>
        )}
      </label>
    </div>
  );
};

export default EmailInput;
