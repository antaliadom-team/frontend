import React, { useRef, useState } from "react";
import { useFormValidation } from "../../../hooks/formValidation";
import styles from "./text.module.css";

const TextInput = ({ text, placeholder, disabled = false }) => {
  const { values, handleChange, errors, isValid, resetErrors } =
    useFormValidation({});

  React.useEffect(() => {
    resetErrors({ name: "", email: "" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={`${styles.input} ${isValid ? "" : styles.warning}`}
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name || ""}
          placeholder={disabled ? null : placeholder}
          required
        />
        <span className={!isValid ? styles.error : styles.hide}>
          {errors.name}
        </span>
      </label>
    </div>
  );
};

export default TextInput;
