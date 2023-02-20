import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({children, value, ...rest}) => {
  return (
      <label className={styles.label}>
        <input
          type="checkbox"
          name="policy"
          className={styles.real_checkbox}
          {...rest}
        />
        <span className={styles.custom_checkbox} />
        <span className={styles.text}>{children}</span>
      </label>
  );
};

export default Checkbox;
