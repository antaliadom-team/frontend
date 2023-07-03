import styles from "./order.module.css";
import { PrimaryButton, TextButton } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card";

const OrderSent = ({ item }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.back}>
                <TextButton onClick={() => navigate("/catalog")}>Назад</TextButton>
            </div>
            <h1 className={styles.title}>Ваша заявка отправлена!</h1>
            <div className={styles.tablet_slider}>
                <Card withBtn={false} item={item} />
            </div>

            <div className={styles.button}>
                <PrimaryButton width={"100%"} onClick={() => navigate("/")}>
                    На главную
                </PrimaryButton>
            </div>
        </>
    );
};

export default OrderSent;
