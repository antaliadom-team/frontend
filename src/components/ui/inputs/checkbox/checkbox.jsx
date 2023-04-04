import React, { useEffect, useState } from "react";
import styles from "./checkbox.module.css";

const Checkbox = (props) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    props.onChange(value)
  }, [value]);

  useEffect(() => {
    if (props.success) {
      setValue(false);
    }
  }, [props.success])

  return (
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.real_checkbox}
          value={value}
          onChange={() => setValue(!value)}
          checked={value}
        />
        <span className={styles.custom_checkbox} />
      </label>
  );
};

export default Checkbox;
