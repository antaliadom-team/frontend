import styles from "./policy.module.css";
import Modal from "../modal/modal";
import PolicyText from "../../policy-text/policy-text";
import close from "../../../images/modal_close.svg";
import { PrimaryButton } from "../../ui/buttons";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal-slice";

const Policy = () => {
    const modal = useSelector((store) => store.modal);
    const dispatch = useDispatch();

    return (
        <Modal isOpen={modal.policy} onClose={() => dispatch(closeModal())}>
            <div className={styles.wrapper}>
                <button className={styles.closeButton} onClick={() => dispatch(closeModal())}>
                    <img src={close} alt="закрыть попап" />
                </button>
                <PolicyText />
                <div className={styles.policyBtn}>
                    <PrimaryButton onClick={() => dispatch(closeModal())}>
                        Принять условия
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    );
};

export default Policy;
