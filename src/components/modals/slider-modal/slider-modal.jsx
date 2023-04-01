import Slider from "../../slider/slider";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modal-slice";

const SliderModal = () => {
    const modal = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    return (
        <Modal isOpen={modal.slider} onClose={() => dispatch(closeModal())}>
            <Slider fullScreen={true} item={modal.item} />
        </Modal>
    );
};

export default SliderModal;
