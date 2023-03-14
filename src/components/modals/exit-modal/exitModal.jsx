import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWidthContext } from "../../../services/app-context";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./exitModal.module.css";

const ExitModal = ({ isOpen, onClose, logout }) => {
  const { screenWidth } = useContext(ScreenWidthContext);
  const navigate = useNavigate();

  const onCloseModal = () => {
    onClose();
    navigate("/profile");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.exit}>
        <h2>Вы уверены, что хотите выйти из личного кабинета?</h2>
        <div>
          <Button type={"primary"} onClick={logout}>
            {screenWidth !== "mobile" ? "Да, выйти" : "Да"}
          </Button>
        </div>
        <div>
          <Button type={"ghost"} onClick={onCloseModal}>
            {screenWidth !== "mobile" ? "Нет, вернуться в личный кабинет" : "Отменить"}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ExitModal;

