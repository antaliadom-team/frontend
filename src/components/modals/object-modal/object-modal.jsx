import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "../../catalog-item/catalog-item";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./object-modal.module.css";
import { ItemContext } from "../../../services/app-context";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modal-slice";

function ObjectModal() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const { item } = useContext(ItemContext);
    const onCloseModal = () => {
        dispatch(closeModal());
        navigate("/");
    };

    return (
        <Modal isOpen={modal.object} onClose={() => dispatch(closeModal())}>
            <div className={styles.object}>
                <h2>Ваша заявка отправлена!</h2>
                <div>
                    <CatalogItem withBtn={false} item={item} />
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

export default ObjectModal;
