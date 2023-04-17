import styles from "../password.module.css";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../../components/ui/buttons";

const ConfirmEmail = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.success}>
            <h2>Пожалуйста, подтвердите сброс пароля</h2>
            <p>Мы отправили вам на почту письмо с ссылкой для сброса пароля. Пожалуйста, перейдите по этой ссылке.</p>
            <PrimaryButton
                onClick={() => {
                    navigate("/");
                }}>
                На главную
            </PrimaryButton>
        </div>
    );
};

export default ConfirmEmail;
