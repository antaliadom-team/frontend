import React, { useRef, useState } from "react";
import { useEffect } from "react";
// import { useFormValidation } from "../../../hooks/formValidation";
import styles from "./text.module.css";

function useValidation(value, validations) {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [validationMessage, setValidatonMessage] = useState("");

  useEffect(() => {
    for (const validation in value) {
      switch (validation) {
        case "minlength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
      }
    }
  });
  return { isEmpty, minLengthError };
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
  const name = useInput("", { isEmpty: true, minLengthError: 1 });

  //   React.useEffect(() => {
  //     resetErrors();
  //   }, []);

  //   const handleChange = (e) => {
  //     setValue(e.target.value);
  //     if (!e.target.value) {
  //       setError("Поле не может быть пустым");
  //     } else {
  //       setError("");
  //     }
  //   };

  //   const [value, setValue] = React.useState("");
  //   const [valueDirty, setValueDirty] = React.useState(false);
  //   const [error, setError] = React.useState("Поле не может быть пустым");

  //   const blurHandler = (e) => {
  //     switch (e.target.name) {
  //       case "name":
  //         setValueDirty(true);
  //         break;
  //     }
  //   };

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
        {name.valueDirty && name.isEmpty && (
          <span className={styles.error}>{name.value}</span>
        )}
      </label>
    </div>
  );
};

export default TextInput;
