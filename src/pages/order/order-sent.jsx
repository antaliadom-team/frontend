import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card";

const OrderSent = ({item}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.back}>
        <Button type={"text"} onClick={() => navigate("/catalog")}>
          Назад
        </Button>
      </div>
      <h1 className={styles.title}>Ваша заявка отправлена!</h1>
      <div className={styles.tablet_slider}>
        <Card withBtn={false} item={item}/>
      </div>

      <div className={styles.button}>
        <Button type={"primary"} width={"100%"} onClick={() => navigate("/")}>На главную</Button>
      </div>
    </>
  );
};

export default OrderSent;