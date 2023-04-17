import styles from "./favourite.module.css";
import Modal from "../modal/modal";
import { PrimaryButton, TextButton } from "../../ui/buttons";
import { closeModal } from "../../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useDeleteFavouriteMutation } from "../../../store/objects-api";

const Favourite = () => {
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const { isAuth } = useSelector(store => store.user);
    const [deleteFavourite] = useDeleteFavouriteMutation();

    const makeDelete = () => {
        deleteFavourite(modal.item.id);
        dispatch(closeModal());
    };

    return (
        <Modal isOpen={modal.favourite} onClose={() => dispatch(closeModal())}>
            {!isAuth && (
                <div className={styles.favourite}>
                    <p>Для добавления в избранное нужно зарегистрироваться</p>
                    <PrimaryButton onClick={() => dispatch(closeModal())}>
                        Понятно
                    </PrimaryButton>
                </div>
            )}
            {isAuth && (
                <div className={styles.favourite}>
                    <p>Вы уверены, что хотите удалить этот объект из избранного?</p>
                    <PrimaryButton onClick={makeDelete}>
                        Да, удалить
                    </PrimaryButton>
                    <TextButton onClick={() => dispatch(closeModal())}>
                        Нет, оставить
                    </TextButton>
                </div>
            )}
        </Modal>
    );
};

export default Favourite;
