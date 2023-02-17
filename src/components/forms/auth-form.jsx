import React from "react";
import { Link } from "react-router-dom";
import styles from "./auth-form.module.css";
import stylesMainform from "./main-form/main-form.module.css";
import question from "../../images/ic_question.svg";
import showPassword from "../../images/showPassword.svg";
import { Checkbox } from "../ui/inputs";
import { Button } from "../ui/buttons";

const EditProfile = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.title_editProfile}`}>
          Редактировать профиль
        </h2>
        <Link className={styles.link} to="/auth/edit-password">
          Изменить пароль
        </Link>
        <ul className={`${styles.list} ${styles.list_editProfile}`}>
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
      </div>
    </form>
  );
};

const EditPassword = ({ isUserEmailCorrect }) => {
  return (
    <form className={`${styles.form} ${styles.sign_in}`}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.title_logout}`}>
          Изменить пароль
        </h2>
        {isUserEmailCorrect ? (
          <>
            <p className={`${styles.text} ${styles.text_editPassword}`}>
              Для изменения пароля введите, пожалуйста, ваш
            </p>
            <p className={`${styles.text} ${styles.text_withoutMargin}`}>
              e-mail и мы пришлем вам на почту письмо со
            </p>
            <p className={`${styles.text} ${styles.text_withoutMargin}`}>
              ссылкой для сброса пароля
            </p>
            <div className={styles.itemEditPassword}>
              <p className={styles.itemTitle}>Ваш e-mail</p>
              <input type="text" className={styles.input} />
            </div>
            <div className={`${styles.buttons} ${styles.buttons_editPassword}`}>
              <button>Сбросить пароль</button>
            </div>
          </>
        ) : (
          <>
            <p className={`${styles.text} ${styles.text_editPassword}`}>
              Введите новый пароль
            </p>
            <ul className={styles.list}>
              <li className={styles.itemEditPassword}>
                <p className={styles.itemTitle}>
                  Пароль*
                  <img className={styles.question} src={question} alt={"Вопрос"} />
                </p>
                <input type="text" placeholder=" " className={styles.input} />
                <img
                  src={showPassword}
                  alt="show password"
                  className={styles.showPassword}
                />
              </li>
              <li className={styles.itemEditPassword}>
                <p className={styles.itemTitle}>Подтвердите пароль*</p>
                <input type="text" placeholder=" " className={styles.input} />
                <img
                  src={showPassword}
                  alt="show password"
                  className={styles.showPassword}
                />
              </li>
            </ul>
          </>
        )}
      </div>
    </form>
  );
};



const SignUp = () => {
  return (
    <form className={`${styles.form} ${styles.sign_up}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Регистрация</h2>
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
          <li className={styles.item}>
            <p className={styles.itemTitle}>
              Пароль*
              <img className={styles.question} src={question} alt={"Вопрос"} />
            </p>
            <input type="text" placeholder=" " className={styles.input} />
            <img
              src={showPassword}
              alt="show password"
              className={styles.showPassword}
            />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Подтвердите пароль*</p>
            <input type="text" placeholder=" " className={styles.input} />
            <img
              src={showPassword}
              alt="show password"
              className={styles.showPassword}
            />
          </li>
        </ul>
        <div
          className={`${stylesMainform.mainForm__checkbox} ${styles.checkbox}`}>
          <Checkbox>
            Я согласен с&nbsp;
            <a href="/policy" className={styles.mainForm__link}>
              Политикой конфиденциальности
            </a>
            &nbsp;и&nbsp;
            <a href="/policy" className={styles.mainForm__link}>
              Условиями использования сервиса
            </a>
          </Checkbox>
        </div>
        <div className={styles.buttons}>
          <Button type="primary">Зарегестрироваться</Button>
        </div>
        <p className={styles.text}>
          Уже есть аккаунт?&nbsp;
          <Link className={styles.link} to="/auth/">
            Вход
          </Link>
        </p>
      </div>
    </form>
  );
};

const LogOut = ({ isLoggedIn }) => {
  return (
    <form className={`${styles.form} ${styles.sign_in}`}>
      <div className={styles.container}>
        {isLoggedIn ? (
          <>
            <h2 className={`${styles.title} ${styles.title_logout}`}>
              Вы уверены, что хотите выйти из учетной записи?
            </h2>
            <div className={`${styles.buttons} ${styles.buttons_logout}`}>
              <button>Да, выйти</button>
              <button>Нет, вернуться в личный кабинет</button>
            </div>
          </>
        ) : (
          <>
            <h2 className={`${styles.title} ${styles.title_logout}`}>
              Вы вышли из личного кабинета!
            </h2>
            <div className={`${styles.buttons} ${styles.buttons_logout}`}>
              <button>На главную</button>
            </div>
          </>
        )}
      </div>
    </form>
  );
};
