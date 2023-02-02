import { useEffect, useState } from "react";
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

const SignIn = () => {
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  function handleValidEmail(valid) {
    setEmailValid(!valid);
    console.log(emailValid);
  }

  function handleValidPassword(valid) {
    setPasswordValid(!valid);
    console.log(passwordValid);
  }

  useEffect(() => {
    console.log("emailValid: " + emailValid, "passwordValid: " + passwordValid);
    if (emailValid || passwordValid) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [emailValid, passwordValid]);

  return (
    <form className={`${styles.form} ${styles.sign_in}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.itemTitle}>E-mail</p>
            <EmailInput
              nameInput={"email"}
              placeholder={"mymail@mail.ru"}
              validEmail={handleValidEmail}
            />
          </li>
          <li className={styles.item}>
            <p className={styles.itemTitle}>Пароль</p>
            <PasswordInput
              nameInput={"password"}
              placeholder={" "}
              validPassword={handleValidPassword}
            />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button type="primary" inactive={formValid}>
            Вход
          </Button>
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

export { SignIn };
