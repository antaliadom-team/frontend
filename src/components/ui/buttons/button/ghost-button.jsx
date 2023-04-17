import styles from "./button.module.css";
import React from "react";

const GhostButton = ({ inactive = false, children, ...rest }) => {
    return (
        <button className={`${styles.button} ${styles.ghost}`} disabled={inactive} {...rest}>
            {children}
        </button>
    );
};

export default GhostButton;
