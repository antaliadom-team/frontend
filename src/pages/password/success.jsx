import { PrimaryButton } from "../../components/ui/buttons";
import styles from "./password.module.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ваш пароль был изменён</h2>
                <div className={styles.return}>
                    <PrimaryButton onClick={() => navigate("/profile")}>В личный кабинет</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Success;
