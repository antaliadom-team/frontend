import styles from "./register.module.css";
import { Button } from "../../components/ui/buttons";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.success}>
      <h2>Ваш аккаунт зарегистрирован</h2>
      <p>Авторизуйтесь для того чтобы сохранять недвижимость в избранное</p>
      <Button type={"primary"} onClick={()=> navigate("/login")}>Авторизоваться</Button>
    </div>
  );
};

export default Success;