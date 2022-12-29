import React from "react";
import { Link } from "react-router-dom";
import styles from "./auth-form.module.css";

const EditProfile = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Редактировать профиль</h2>
      <Link className={styles.link} to="/auth/change-password">
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
    </form>
  );
};

const SignIn = () => {
  return (
    <form className={`${styles.form} ${styles.sign_in}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.itemTitle}>E-mail</p>
            <input type="text" className={styles.input} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Пароль</p>
            <input type="text" className={styles.input} />
          </li>
        </ul>
        <div className={styles.buttons}>
          <button>Вход</button>
        </div>
        <Link className={styles.link} to="/auth/change-password">
          Забыли пароль?
        </Link>
        <p className={styles.text}>
          Нет аккаунта?&nbsp;
          <Link className={styles.link} to="/auth/signup">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </form>
  );
};

export { EditProfile, SignIn };
