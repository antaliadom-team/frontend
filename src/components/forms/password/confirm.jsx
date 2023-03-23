import { Button } from "../../ui/buttons";
import styles from "./edit-password.module.css";
import { useNavigate } from "react-router-dom";

const Confirm = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ваш пароль бы изменён</h2>
                <div className={styles.return}>
                    <Button type="primary" onClick={() => navigate("/profile")}>
                        В личный кабинет
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Confirm;
