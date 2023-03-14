import ReactDOM from "react-dom";
import { useEffect } from "react";
import styles from "./modal.module.css";

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  if (isOpen) {
    return ReactDOM.createPortal(
      <div onClick={onClose} className={styles.overlay}>
        <div className={styles.modal}>{children}</div>
      </div>,
      document.getElementById("modal")
    );
  }
};

export default Modal;

