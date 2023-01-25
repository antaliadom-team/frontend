import React from "react";
import { useEffect, useState } from "react";
// import { useFormValidation } from "../../../hooks/formValidation";
import styles from "./text.module.css";

function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (!value) {
            console.log("isEmpty");
            setEmpty(false);
            setValidationMessage("Поле не может быть пустым");
          } else {
            setEmpty(true);
            setValidationMessage("");
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            console.log(value.length);
            setMaxLengthError(true);
            setValidationMessage("Слишком длинное имя");
          } else {
            setMaxLengthError(false);
          }
          break;
        case "isName":
          const reg = /[/!$()*+.<>?^{|}_0-9]/;
          if (reg.test(String(value).toLowerCase())) {
            setNameError(false);
            setValidationMessage("Имя может содержать только буквы");
          } else {
            setNameError(true);
          }
          break;

        case "minLength":
          if (value.length < validations[validation]) {
            setMinLengthError(true);
            setValidationMessage(
              `Необходимо ввести хотя бы ${validations[validation]} символа`
            );
          } else {
            setMinLengthError(false);
          }
          break;
        default:
          console.log("Error!");
      }
    }
  }, [value]);
  return {
    isEmpty,
    minLengthError,
    validationMessage,
    maxLengthError,
    nameError,
  };
}

function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [valueDirty, setValueDirty] = useState(false);
  const valid = useValidation(value, validations);
  function handleChange(e) {
    setValue(e.target.value);
  }

  function onBlur(e) {
    setValueDirty(true);
  }

  return { value, handleChange, onBlur, valueDirty, ...valid };
}

const TextInput = ({ text, placeholder, disabled }) => {
  const name = useInput("", {
    isEmpty: true,
    isName: true,
    maxLength: 25,
  });

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => name.handleChange(e)}
          onBlur={(e) => name.onBlur(e)}
          name="name"
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
