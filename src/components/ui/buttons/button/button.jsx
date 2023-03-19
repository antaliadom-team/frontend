import React, { useEffect, useState } from "react";
import styles from "./button.module.css";

const Button = ({ type, inactive = false, children, width = null, padding = null, isSubmit = false, ...rest }) => {
  const [buttonType, setButtonType] = useState(styles.primary);

  useEffect(() => {
    switch (type) {
      case "primary":
        setButtonType(styles.primary);
        break;
      case "ghost":
        setButtonType(styles.ghost);
        break;
      case "text":
        setButtonType(styles.text);
        break;
      default:
        setButtonType(styles.primary);
    }
  }, [type]);

  return (
    <button
      className={`${styles.button} ${buttonType}`}
      style={{ width: width, padding: padding}}
      disabled={inactive}
      type={isSubmit ? "submit" : "button"}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
