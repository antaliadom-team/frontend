import styles from "./policy.module.css"
import Modal from "../modal/modal";
import React from "react";
import PolicyText from "../../policy-text/policy-text";
import { Button } from "../../ui/buttons";

const Policy = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.wrapper}>
        <PolicyText />
        <div className={styles.policyBtn}>
          <Button
            type={"primary"}
            onClick={() => {
              onClose();
            }}>
            Принять условия
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Policy;
