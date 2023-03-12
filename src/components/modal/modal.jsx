import ReactDOM from "react-dom";
import { useContext, useEffect } from "react";
import Overlay from "../overlay/overlay";
import styles from "./modal.module.css";
import { ModalContext, ScreenWidthContext } from "../../services/app-context";
import close from "../../images/close_modal.svg";

const Modal = ({ children, onClose }) => {
  const { modal, setModal } = useContext(ModalContext);
  const { screenWidth } = useContext(ScreenWidthContext);
  const modalClose = () => {
    setModal({ ...modal, policy: false });
  };
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
      <div
        className={
          screenWidth === "tablet" ? (modal.policy ? styles.modalPolicyTablet : styles.modalPolicy) : styles.modalPolicy
        }>
        {modal.policy ? (
          <button onClick={modalClose} className={styles.closeIcon}>
            <img src={close} alt="close" />
          </button>
        ) : null}
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
