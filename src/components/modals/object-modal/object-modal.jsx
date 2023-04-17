import { useNavigate } from "react-router-dom";
import Card from "../../card/card";
import { PrimaryButton } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./object-modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal-slice";

function ObjectModal() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const onCloseModal = () => {
        dispatch(closeModal());
        navigate("/");
    };

    return (
        <Modal isOpen={modal.object} onClose={() => dispatch(closeModal())}>
            <div className={styles.object}>
                <h2>Ваша заявка отправлена!</h2>
                <div>
                    <Card withBtn={false} item={modal.item} />
                </div>
                <div>
                    <PrimaryButton width={"100%"} onClick={onCloseModal}>
                        На главную
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
}

export default ObjectModal;
