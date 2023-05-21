import styles from "./register.module.css";
import { PrimaryButton } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.success}>
            <h2>Пожалуйста, подтвердите регистрацию</h2>
            <p>
                Мы отправили вам на почту письмо с ссылкой для подтверждения регистрации. Пожалуйста, пройдите по этой
                ссылке
            </p>
            <PrimaryButton onClick={() => navigate("/")}>Понятно</PrimaryButton>
        </div>
    );
};

export default Success;
