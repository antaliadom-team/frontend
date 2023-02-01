import React from "react";
import { useInput } from "../../../../hooks/useInput";
import styles from "../text/text.module.css";
import showPassword from "../../../../images/showPassword.svg";
import showPasswordError from "../../../../images/showPassword_error.svg";

const PasswordInput = ({ nameInput, placeholder, disabled }) => {
  const password = useInput("", {
    isPassword: true,
  });

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <input
          className={
            password.passwordError
              ? styles.input
              : `${styles.input} ${styles.warning}`
          }
          type="text"
          onChange={(e) => password.handleChange(e)}
          onBlur={(e) => password.onBlur(e)}
          name={nameInput}
          value={password.value}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
        />
        {password.valueDirty && !password.passwordError && (
          <span className={styles.error}>{password.validationMessage}</span>
        )}
      </label>
      <img
        src={password.passwordError ? showPassword : showPasswordError}
        alt="show password"
        className={styles.showPassword}
      />
    </div>
  );
};
export default PasswordInput;
