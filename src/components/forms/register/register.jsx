import styles from "./register.module.css"
import { Checkbox, PhoneInput, TextInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <h2 className={styles.title}>Регистрация</h2>
        <ul className={styles.list}>
          <li>
            <TextInput text="Ваше имя*" placeholder="Иван"/>
          </li>
          <li>
            <TextInput text="Ваша фамилия*" placeholder="Иванов"/>
          </li>
          <li>
            <TextInput text="Ваш e-mail*" placeholder="ivanov@mail.ru"/>
          </li>
          <li>
            <PhoneInput text="Номер телефона*"/>
          </li>
          <li>
            <TextInput text="Пароль*" />
          </li>
          <li>
            <TextInput text="Подтвердите пароль*" />
          </li>
        </ul>
        <div
          className={styles.checkbox}>
          <Checkbox>
            Я согласен с&nbsp;
            <a href="/policy" className={styles.link}>
              Политикой конфиденциальности
            </a>
            &nbsp;и&nbsp;
            <a href="/policy" className={styles.link}>
              Условиями использования сервиса
            </a>
          </Checkbox>
        </div>
        <div className={styles.buttons}>
          <Button type="primary">Зарегистрироваться</Button>
        </div>
        <p className={styles.text}>
          Уже есть аккаунт?&nbsp;
          <Link className={styles.link} to="/login">
            Вход
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;