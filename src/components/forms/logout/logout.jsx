import React, { useContext } from "react";
import styles from "./logout.module.css";
import { Button } from "../../ui/buttons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../services/app-context";

const Logout = () => {
  const navigate = useNavigate();
  const { isAuth, setAuth } = useContext(AuthContext);

  if (isAuth) {
    return (
      <div className={styles.logout}>
        <div className={styles.container}>
          <h2 className={styles.title}>Вы уверены, что хотите выйти из учетной записи?</h2>
          <div className={styles.buttons}>
            <Button type="primary" onClick={() => setAuth(false)}>Да, выйти</Button>
            <Button type="ghost" onClick={() => navigate("/profile")}>Нет, вернуться в личный кабинет</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.logout}>
      <div className={styles.container}>
          <h2 className={styles.title}>Вы вышли из личного кабинета!</h2>
          <div className={styles.buttons}>
            <Button type="primary" onClick={() => navigate("/")}>На главную</Button>
          </div>
      </div>
    </div>
  );
};

export default Logout;
