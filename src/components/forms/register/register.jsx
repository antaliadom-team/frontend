import styles from "./register.module.css";
import { Checkbox, TextInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/use-form";
import { registration } from "../../../services/api/registration";
import { AuthContext } from "../../../services/app-context";
import { useContext } from "react";
import Policy from "../../policy/policy";

const Register = () => {
  const { setAuth } = useContext(AuthContext);

  const { values, handleChange } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    re_password: "",
    agreement: false,
  });
  const handleForm = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone, password, re_password } = e.target.elements;

    registration(
      {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        re_password: re_password.value,
        agreement: true,
      },
      setAuth
    );
  };

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Регистрация</h2>
        <ul className={styles.list}>
          <li>
            <TextInput
              text="Ваше имя*"
              name={"first_name"}
              onChange={handleChange}
              value={values.first_name}
              placeholder="Иван"
            />
          </li>
          <li>
            <TextInput
              text="Ваша фамилия*"
              name={"last_name"}
              onChange={handleChange}
              value={values.last_name}
              placeholder="Иванов"
            />
          </li>
          <li>
            <TextInput
              text="Ваш e-mail*"
              name={"email"}
              onChange={handleChange}
              value={values.email}
              placeholder="ivanov@mail.ru"
            />
          </li>
          <li>
            <TextInput text="Номер телефона*" name={"phone"} onChange={handleChange} value={values.phone} />
          </li>
          <li>
            <TextInput text="Пароль*" name={"password"} onChange={handleChange} value={values.password} />
          </li>
          <li>
            <TextInput
              text="Подтвердите пароль*"
              name={"re_password"}
              onChange={handleChange}
              value={values.re_password}
            />
          </li>
        </ul>
        <div className={styles.checkbox}>
          <Checkbox>
            <Policy/>

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
