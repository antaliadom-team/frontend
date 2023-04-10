import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./exit-modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/modal-slice";
import { useLogoutMutation } from "../../../store/users-api";
import { deleteCookie } from "../../../helpers/cookie";
import { logoutUser } from "../../../store/user-slice";

const ExitModal = () => {
    const screen = useSelector(store => store.screen);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const [logout] = useLogoutMutation();

    const exit = () => {
        dispatch(closeModal());
        logout()
          .unwrap()
          .then(() => {
              deleteCookie("accessToken");
              localStorage.removeItem("refreshToken");
              dispatch(logoutUser());
          })
          .catch(() => {
              deleteCookie("accessToken");
              localStorage.removeItem("refreshToken");
          });
        navigate("/");
    };

    const onCloseModal = () => {
        dispatch(closeModal());
        navigate("/profile");
    };

    return (
        <Modal isOpen={modal.logout} onClose={() => dispatch(closeModal())}>
            <div className={styles.exit}>
                <h2>Вы уверены, что хотите выйти из личного кабинета?</h2>
                <div>
                    <Button type={"primary"} onClick={exit}>
                        {!screen.mobile ? "Да, выйти" : "Да"}
                    </Button>
                </div>
                <div>
                    <Button type={"ghost"} onClick={onCloseModal}>
                        {!screen.mobile ? "Нет, вернуться в личный кабинет" : "Отменить"}
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ExitModal;
