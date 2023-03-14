import React from "react";
import Slider from "../../slider/slider";
import Modal from "../modal/modal";
import styles from "./sliderModal.module.css";

const SliderModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Slider />
    </Modal>
  );
};

export default SliderModal;

