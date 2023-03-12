import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./policy.module.css";
import { ModalContext } from "../../services/app-context";

const Policy = () => {
  const { modal, setModal } = useContext(ModalContext);
  const modalOpen = () => {
    setModal({ ...modal, policy: true });
  };
  return (
    <>
      <span>Я согласен с&nbsp;</span>
      <a className={styles.button} onClick={modalOpen}>
        Политикой конфиденциальности
      </a>
      <span>&nbsp;и&nbsp;</span>
      <a className={styles.button} onClick={modalOpen}>
        Условиями использования сервиса
      </a>
    </>
  );
};

export default Policy;
