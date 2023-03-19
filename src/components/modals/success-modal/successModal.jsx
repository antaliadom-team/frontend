import React from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "../../catalog-item/catalog-item";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./successModal.module.css";

function SuccessModal({ onClose, isOpen }) {
  const navigate = useNavigate();
  const onCloseModal = () => {
    onClose();
    navigate("/");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.object}>
        <h2>Ваша заявка отправлена!</h2>
        <div>
          <CatalogItem withBtn={false} />
        </div>
        <div>
          <Button type={"primary"} width={"100%"} onClick={onCloseModal}>
            На главную
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default SuccessModal;

