import { useRef, useState, useEffect } from "react";
import styles from "./text.module.css";

const TextInput =  ({ text, placeholder, disabled = false, value, errorProps, handleChange, ...rest }) => {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [warning, setWarning] = useState("");

  useEffect(() => {
      setError(errorProps);
      setErrorText(errorProps)
    }, [value, errorProps])

  useEffect(() => {
    const reg = /[/!$()*+.<>?^{|}_0-9]/;
    const match = inputRef?.current.value.match(reg);
    const length = inputRef?.current.value.length

    if (match) {
      inputRef.current.focus()
      setError(true)
      setErrorText("Только буквы");
    }

    else if (length > 0 && length < 2) {
      inputRef.current.focus()
      setError(true)
      setErrorText( "Минимум 2 буквы");
    }

    else if (length > 30) {
      inputRef.current.focus()
      setError(true)
      setErrorText("Максимум 30 букв");
    }

    else {
      setError(false)
      setErrorText("");
      setWarning("");
    }
  }, [value])

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>{text}</span>
        <input
          className={!warning ? styles.input : styles.warning}
          type="text"
          ref={inputRef}
          value={value}
          onBlur={()=> error && setWarning(styles.warning)}
          placeholder={disabled ? null : placeholder}
          disabled={disabled}
          onChange={handleChange}
          {...rest}
        />
        <span className={error ? styles.error : styles.hide}>{errorText}</span>
      </label>
    </div>
  );
};

export default TextInput;
