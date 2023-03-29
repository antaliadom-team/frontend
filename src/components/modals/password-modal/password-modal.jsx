import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./password-modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modal-slice";

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
                    <Button type="primary" onClick={onCloseModal}>
                        Понятно
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default PasswordModal;
