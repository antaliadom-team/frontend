import styles from "./register.module.css";
import { Button } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.success}>
      <h2>Ваш аккаунт зарегистрирован</h2>
      <p>Теперь вы можете сохранять недвижимость в избранное!</p>
      <Button type={"primary"} onClick={()=> navigate("/")}>На главную</Button>
    </div>
  );
};

export default Success;