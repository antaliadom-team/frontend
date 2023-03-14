import styles from "./login.module.css";
import { Button } from "../../ui/buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "../../ui/inputs";
import { useContext, useEffect, useState } from "react";
import { AuthContext, ScreenWidthContext } from "../../../services/app-context";
import { useForm } from "../../../hooks/use-form";
import { createToken } from "../../../services/api/jwt";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {screenWidth} = useContext(ScreenWidthContext);
  const { isAuth, setAuth } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const [error, setError]  = useState({email: "", password: ""});
  const { values, handleChange } = useForm({ email: "", password: ""});
  const [disabled, setDisabled] = useState(true);


  const handleForm = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    if (password.value === "") {
      setError({ ...error, password: "Введите пароль" });
      password.focus();
      return;
    }

    if (email.value === "") {
      setError({ ...error, email: "Введите email"});
      email.focus();
      return;
    }

    createToken({email: email.value, password: password.value}, setAuth)
  };

  const handleButton = (e) => {
    e.target.value !== ""
      ? setDisabled(false)
      : setDisabled(true)
    }


  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth]);

  return (
    <form className={styles.login} onSubmit={handleForm} onChange={handleButton}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <ul className={styles.list}>
          <li>
            <TextInput text={"Email"} name={"email"} onChange={handleChange} value={values.email} errorProps={error.email} />
          </li>
          <li>
            <TextInput text={"Пароль"} name={"password"} onChange={handleChange} value={values.password} errorProps={error.password} />
          </li>
          <li>
            <Button type="primary" isSubmit={true} inactive={disabled} width={screenWidth !== "desktop" && "100%"}>
              Вход
            </Button>
          </li>
          <li>
            <p className={styles.text}>
              <Link className={styles.link} to="/edit-password">
                Забыли пароль?
              </Link>
            </p>
          </li>
          <li>
            <p className={styles.text}>
              Нет аккаунта?&nbsp;
              <Link className={styles.link} to="/register">
                Зарегистрироваться
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </form>
  );
};

export default Login;
