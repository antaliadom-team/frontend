import styles from "./textarea.module.css";
import { useState } from "react";
import TextareaAutosize from 'react-textarea-autosize';

const TextareaInput = (props) => {
  const [value, setValue] = useState(props.value || "")

  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>Комментарий</span>
        <TextareaAutosize
          className={props.error ? styles.warning : styles.input}
          onChange={(e) => {
            setValue(e.target.value)
            props.onChange && props.onChange(e)
          }}
          value={value}
          placeholder="Например, нужно рассмотреть как можно скорее"
        />
        <span className={props.error ? styles.error : styles.hide}>{props.errorText}</span>
      </label>
    </div>
  );
};

export default TextareaInput;
