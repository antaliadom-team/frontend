import styles from "./button.module.css";
import React from "react";

const TextButton = ({ inactive = false, children, ...rest }) => {
    return (
        <button className={`${styles.button} ${styles.text}`} disabled={inactive} {...rest}>
            {children}
        </button>
    );
};

export default TextButton;
