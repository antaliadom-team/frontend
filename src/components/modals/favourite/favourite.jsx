import styles from "./favourite.module.css";
import Modal from "../modal/modal";
import { Button } from "../../ui/buttons";
import { useContext } from "react";
import { AuthContext, ModalContext, ObjectsContext } from "../../../services/app-context";
import { deleteFavourite } from "../../../services/api/user";
import { getCatalogObjects } from "../../../services/api/objects";

const Favourite = ({ isOpen, onClose}) => {
  const { isAuth } = useContext(AuthContext);
  const { modal } = useContext(ModalContext);
  const { setObjects } = useContext(ObjectsContext);

  const makeDelete = () => {
    deleteFavourite(modal.item.id);
    getCatalogObjects(setObjects, modal.item.category, isAuth);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!isAuth && (<div className={styles.favourite}>
        <p>Для добавления в избранное нужно зарегистрироваться</p>
        <Button type={"primary"} onClick={onClose}>
          Понятно
        </Button>
      </div>)}
      {isAuth && (<div className={styles.favourite}>
        <p>Вы уверены, что хотите удалить этот объект из избранного?</p>
        <Button type={"primary"} onClick={makeDelete}>
          Да, удалить
        </Button>
        <Button type={"text"} onClick={onClose}>
          Нет, оставить
        </Button>
      </div>)}
    </Modal>
  );
};

export default Favourite;