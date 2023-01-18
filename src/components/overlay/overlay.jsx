import React from "react";
import styles from "./overlay.module.css"

const Overlay = ({onClose}) => {
  return (
    <div onClick={onClose} className={styles.overlay} />
  );
};

export default Overlay;