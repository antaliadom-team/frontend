import React, { useState } from "react";
import styles from "../textarea/textarea.module.css";

const TextareaInput = () => {
  const [value, setValue] = useState("");


  return (
    <div className={styles.wrapper}>
      <label className={styles.field}>
        <span className={styles.text}>Комментарий</span>
        <textarea
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Например, нужно рассмотреть как можно скорее"
        />
      </label>
    </div>
  );
};

export default TextareaInput;
