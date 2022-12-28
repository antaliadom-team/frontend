import React from "react";
import { Link, Route } from "react-router-dom";
import styles from "./auth-form.module.css";

const SignUp = () => {
  return (
    <Route path="/signup">
      <h2 className={styles.title}>Редактировать профиль</h2>
      <Link className={styles.change_password} to="/change-password">
        Изменить пароль
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.itemTitle}>Ваше имя*</p>
          <input type="text" placeholder="Иван" className={styles.input} />
        </li>
        <li className={styles.item}>
          <p className={styles.itemTitle}>Ваша фамилия*</p>
          <input placeholder="Иванов" className={styles.input} />
        </li>
        <li className={styles.item}>
          <p className={styles.itemTitle}>Ваш e-mail*</p>
          <input
            type="text"
            placeholder="ivanov@mail.ru"
            className={styles.input}
          />
        </li>
        <li className={styles.item}>
          <p className={styles.itemTitle}>Номер телефона*</p>
          <input
            type="text"
            placeholder="+7 921 123 45 67"
            className={styles.input}
          />
        </li>
      </ul>
      <div className={styles.buttons}>
        <button>Сохранить</button>
        <button>Отменить</button>
      </div>
    </Route>
  );
};

export default SignUp;
