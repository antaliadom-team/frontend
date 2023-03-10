import styles from "./login.module.css";
import { Button } from "../../ui/buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "../../ui/inputs";
import { useContext, useEffect } from "react";
import { AuthContext, ScreenWidthContext } from "../../../services/app-context";
import { useForm, Controller } from "react-hook-form";
import { createToken } from "../../../services/api/jwt";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { screenWidth } = useContext(ScreenWidthContext);
  const { isAuth, setAuth } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth]);

  return (
    <form className={styles.login} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Вход</h2>
        <ul className={styles.list}>
          <li>
            <Controller
              control={control}
              name="email"
              rules={{ required: "Это поле обязательно" }}
              render={({ field, fieldState }) => (
                <TextInput
                  type="text"
                  label={"Email"}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={fieldState.error}
                  errorText={errors.email?.message}
                />
              )
            }
            />
          </li>
          <li>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Это поле обязательно" }}
              render={({ field }) => (
                <TextInput
                  type="password"
                  label={"Пароль"}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={!!errors.password}
                  errorText={errors.password?.message}
                />
              )}
            />
          </li>
          <li>
            <Button type="primary" width={screenWidth !== "desktop" && "100%"}>
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
