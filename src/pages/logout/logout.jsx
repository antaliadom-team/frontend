import styles from "./logout.module.css";
import { GhostButton, PrimaryButton } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../store/users-api";
import { deleteCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user-slice";
import { useState } from "react";
import ProtectedRoute from "../../components/protected-route/protected-route";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const [success, setSuccess] = useState(false);

    const exit = () => {
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
        setSuccess(true);
    };

    if (success) {
        return (
            <div className={styles.logout}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Вы вышли из личного кабинета!</h2>
                    <div className={styles.buttons}>
                        <PrimaryButton
                            onClick={() => {
                                navigate("/");
                                window.location.reload();
                            }}>
                            На главную
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <ProtectedRoute>
            <div className={styles.logout}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Вы уверены, что хотите выйти из учетной записи?</h2>
                    <div className={styles.buttons}>
                        <PrimaryButton onClick={exit}>Да, выйти</PrimaryButton>
                        <GhostButton onClick={() => navigate("/profile")}>Нет, вернуться в личный кабинет</GhostButton>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default Logout;
