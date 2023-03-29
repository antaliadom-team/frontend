import styles from "../password.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/buttons";

const ConfirmEmail = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.success}>
            <h2>Пожалуйста, подтвердите сброс пароля</h2>
            <p>Мы отправили вам на почту письмо с ссылкой для сброса пароля. Пожалуйста, перейдите по этой ссылке.</p>
            <Button
                type={"primary"}
                onClick={() => {
                    navigate("/");
                }}>
                На главную
            </Button>
        </div>
    );
};

export default ConfirmEmail;
