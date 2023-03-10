import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = (props) => {
  return (
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.real_checkbox}
          value={props.value}
          onChange={props.onChange}
        />
        <span className={styles.custom_checkbox} />
        <span className={styles.text}>{props.children}</span>
      </label>
  );
};

export default Checkbox;
