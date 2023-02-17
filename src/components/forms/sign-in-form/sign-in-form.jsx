import styles from "../auth-form.module.css";
import { Button } from "../../ui/buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "../../ui/inputs";
import { useContext, useEffect } from "react";
import { UserContext, AuthContext } from "../../../services/app-context";

const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useContext(UserContext);
  const { isAuth, setAuth } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const handleForm = (e) => {
    e.preventDefault();
    const { email, pass } = e.target.elements;
    email.value === user.email && pass.value === user.password
      ? setAuth(true)
      : setAuth(false);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth]);

  return (
    <form className={`${styles.form} ${styles.sign_in}`} onSubmit={handleForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <TextInput text={"Email"} placeholder={"yourmail@mail.com"} name={"email"} />
          </li>
          <li className={styles.item}>
            <TextInput text={"Пароль"} placeholder={""} name={"pass"} />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button type="primary">Вход</Button>
        </div>
        <Link className={styles.link} to="/forgot-password">
          Забыли пароль?
        </Link>
        <p className={styles.text}>
          Нет аккаунта?&nbsp;
          <Link className={styles.link} to="/sign-up">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
