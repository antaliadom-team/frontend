import styles from "./favourite.module.css";
import Modal from "../modal/modal";
import { Button } from "../../ui/buttons";
import { useContext } from "react";
import { AuthContext, ObjectsContext } from "../../../services/app-context";
import { deleteFavourite } from "../../../services/api/user";
import { getCatalogObjects } from "../../../services/api/objects";
import { closeModal } from "../../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";

const Favourite = () => {
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const { isAuth } = useContext(AuthContext);
    const { setObjects } = useContext(ObjectsContext);

    const makeDelete = () => {
        deleteFavourite(modal.item.id);
        getCatalogObjects(setObjects, modal.item.category, isAuth);
        dispatch(closeModal());
    };

    return (
        <Modal isOpen={modal.favourite} onClose={() => dispatch(closeModal())}>
            {!isAuth && (
                <div className={styles.favourite}>
                    <p>Для добавления в избранное нужно зарегистрироваться</p>
                    <Button type={"primary"} onClick={() => dispatch(closeModal())}>
                        Понятно
                    </Button>
                </div>
            )}
            {isAuth && (
                <div className={styles.favourite}>
                    <p>Вы уверены, что хотите удалить этот объект из избранного?</p>
                    <Button type={"primary"} onClick={makeDelete}>
                        Да, удалить
                    </Button>
                    <Button type={"text"} onClick={() => dispatch(closeModal())}>
                        Нет, оставить
                    </Button>
                </div>
            )}
        </Modal>
    );
};

export default Favourite;
