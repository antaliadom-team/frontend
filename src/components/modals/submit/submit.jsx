import styles from "./submit.module.css";
import Modal from "../modal/modal";
import { Button } from "../../ui/buttons";
import React from "react";

const Submit = ({isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.modal}>
        <h2>Ваша заявка на подбор недвижимости отправлена!</h2>
        <div className={styles.button}>
          <Button type={"primary"} width={"100%"} onClick={onClose}>На главную</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Submit;