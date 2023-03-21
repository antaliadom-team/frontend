import Slider from "../../slider/slider";
import Modal from "../modal/modal";
import { useContext } from "react";
import { ModalContext } from "../../../services/app-context";

const SliderModal = ({ isOpen, onClose }) => {
  const {modal} = useContext(ModalContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Slider fullScreen={true} item={modal.item}/>
    </Modal>
  );
};

export default SliderModal;

