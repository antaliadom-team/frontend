import styles from "./edit-password.module.css";
import { Button } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";

const Success = ({ children, setSuccessEmail }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.success}>
            <h2>{children}</h2>
            <Button
                type={"primary"}
                onClick={() => {
                    setSuccessEmail(false);
                    navigate("/");
                }}>
                На главную
            </Button>
        </div>
    );
};

export default Success;
