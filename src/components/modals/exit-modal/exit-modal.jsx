import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, UserContext } from "../../../services/app-context";
import { Button } from "../../ui/buttons";
import Modal from "../modal/modal";
import styles from "./exit-modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../store/reducers/modal-slice";
import { logoutUser } from "../../../services/api/user";

const ExitModal = () => {
    const screen = useSelector(store => store.screen);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const modal = useSelector((store) => store.modal);
    const { setAuth } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);

    const logout = () => {
        dispatch(closeModal());
        logoutUser(setAuth, setUser);
        navigate("/");
    };

    const onCloseModal = () => {
        dispatch(closeModal());
        navigate("/profile");
    };

    return (
        <Modal isOpen={modal.exit} onClose={() => dispatch(closeModal())}>
            <div className={styles.exit}>
                <h2>Вы уверены, что хотите выйти из личного кабинета?</h2>
                <div>
                    <Button type={"primary"} onClick={logout}>
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
