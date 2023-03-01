import ReactDOM from "react-dom";
import { useEffect } from "react";
import Overlay from "../overlay/overlay";
import styles from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  const escapeModal = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escapeModal);
    return () => {
      document.removeEventListener("keydown", escapeModal);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <Overlay onClose={onClose} />
      <div className={styles.modal}>
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
