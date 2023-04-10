import styles from "./logout.module.css";
import { Button } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../store/users-api";
import { deleteCookie } from "../../helpers/cookie";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user-slice";

const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();
    const { isAuth } = useSelector((store) => store.user);

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
    };

    if (isAuth) {
        return (
            <div className={styles.logout}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Вы уверены, что хотите выйти из учетной записи?</h2>
                    <div className={styles.buttons}>
                        <Button type="primary" onClick={exit}>
                            Да, выйти
                        </Button>
                        <Button type="ghost" onClick={() => navigate("/profile")}>
                            Нет, вернуться в личный кабинет
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.logout}>
            <div className={styles.container}>
                <h2 className={styles.title}>Вы вышли из личного кабинета!</h2>
                <div className={styles.buttons}>
                    <Button type="primary" onClick={() => navigate("/")}>
                        На главную
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Logout;
