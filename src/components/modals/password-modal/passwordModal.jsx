import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./passwordModal.module.css";

const PasswordModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const onCloseModal = () => {
    onClose();
    navigate("/profile");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.password}>
        <h2>Изменения сохранены</h2>
        <div>
          <Button type="primary" onClick={onCloseModal}>
            Понятно
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default PasswordModal;

