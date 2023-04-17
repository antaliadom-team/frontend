import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./password-modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal-slice";

const PasswordModal = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const onCloseModal = () => {
        dispatch(closeModal());
        navigate("/profile");
    };

    return (
        <Modal isOpen={modal.passwordChanged} onClose={() => dispatch(closeModal())}>
            <div className={styles.password}>
                <h2>Изменения сохранены</h2>
                <div>
                    <PrimaryButton onClick={onCloseModal}>
                        Понятно
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
};

export default PasswordModal;
