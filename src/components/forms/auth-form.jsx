import React from "react";
import { Link } from "react-router-dom";
import styles from "./auth-form.module.css";
import stylesMainform from "./main-form.module.css";
import question from "../../images/ic_question.svg";
import showPassword from "../../images/showPassword.svg";

import {
  Checkbox,
  EmailInput,
  PasswordInput,
  PhoneInput,
  TextInput,
} from "../ui/inputs";
import { Button } from "../ui/buttons";
import Surname from "../ui/inputs/surname/surname";

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
            <TextInput nameInput={"name"} placeholder={"Имя"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Ваша фамилия*</p>
            <TextInput nameInput={"name"} placeholder={"Фамилия"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Ваш e-mail*</p>
            <EmailInput nameInput={"email"} placeholder={"mymail@mail.ru"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Номер телефона*</p>
            <PhoneInput nameInput={"phone"} placeholder={"+7 999 123 45 67"} />
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
              <EmailInput nameInput={"email"} placeholder={"mymail@mail.ru"} />
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
                  <img
                    className={styles.question}
                    src={question}
                    alt={"Вопрос"}
                  />
                </p>
                <PasswordInput name={"password"} placeholder={" "} />
              </li>
              <li className={styles.itemEditPassword}>
                <p className={styles.itemTitle}>Подтвердите пароль*</p>
                <PasswordInput name={"password"} placeholder={" "} />
              </li>
            </ul>
          </>
        )}
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
            <EmailInput nameInput={"email"} placeholder={"mymail@mail.ru"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Пароль</p>
            <PasswordInput nameInput={"password"} placeholder={" "} />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button type="primary">Вход</Button>
        </div>
        <Link className={styles.link} to="/auth/edit-password">
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

const SignUp = () => {
  return (
    <form className={`${styles.form} ${styles.sign_up}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Регистрация</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Ваше имя*</p>
            <TextInput nameInput={"name"} placeholder={"Имя"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Ваша фамилия*</p>
            <Surname nameInput={"surname"} placeholder={"Фамилия"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Ваш e-mail*</p>
            <EmailInput nameInput={"email"} placeholder={"mymail@mail.ru"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Номер телефона*</p>
            <PhoneInput nameInput={"phone"} placeholder={"+7 999 123 45 67"} />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>
              Пароль*
              <img className={styles.question} src={question} alt={"Вопрос"} />
            </p>
            <PasswordInput nameInput={"password"} placeholder={" "} />
          </li>
          <p className={styles.itemTitle}>Подтвердите пароль*</p>
          <li className={styles.item}>
            <PasswordInput nameInput={"password"} placeholder={" "} />
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

export { EditProfile, SignIn, SignUp, LogOut, EditPassword };
