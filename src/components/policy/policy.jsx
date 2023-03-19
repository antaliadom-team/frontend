import React, { useContext } from "react";
import styles from "./policy.module.css";
import { ModalContext } from "../../services/app-context";

const Policy = () => {
  const { modal, setModal } = useContext(ModalContext);
  const modalOpen = () => {
    setModal({ ...modal, policy: true });
    console.log(1)
  };
  return (
    <div>
      <span>Я согласен с&nbsp;</span>
      <p className={styles.button} onClick={modalOpen}>
        Политикой конфиденциальности
      </p>
      <span>&nbsp;и&nbsp;</span>
      <p className={styles.button} onClick={modalOpen}>
        Условиями использования сервиса
      </p>
    </div>
  );
};

export default Policy;
