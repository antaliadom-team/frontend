import styles from "./submit.module.css";
import Modal from "../modal/modal";
import { Button } from "../../ui/buttons";
import { closeModal } from "../../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const Submit = () => {
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);


    return (
        <Modal isOpen={modal.submit} onClose={() => dispatch(closeModal())}>
            <div className={styles.modal}>
                <h2>Ваша заявка на подбор недвижимости отправлена!</h2>
                <div className={styles.button}>
                    <Button type={"primary"} width={"100%"} onClick={() => {
                        dispatch(closeModal());
                    }}>
                        На главную
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default Submit;
