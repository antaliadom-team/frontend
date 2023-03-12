import styles from "./login.module.css";
import { Button } from "../../ui/buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "../../ui/inputs";
import { useContext, useEffect } from "react";
import { AuthContext, ScreenWidthContext } from "../../../services/app-context";
import { useForm, Controller } from "react-hook-form";
import { createToken } from "../../../services/api/jwt";
import { emailValidation, passwordValidation } from "../../../services/validation";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { screenWidth } = useContext(ScreenWidthContext);
  const { isAuth, setAuth } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "all"
  });

  const onSubmit = (data) => {
    createToken(data, setAuth, setError)
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
              rules={emailValidation}
              render={({ field, fieldState }) => (
                <TextInput
                  type="text"
                  label="Email"
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
              rules={passwordValidation}
              render={({ field, fieldState }) => (
                <TextInput
                  type="password"
                  label="Пароль"
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  error={fieldState.error}
                  errorText={errors.password?.message}
                />
              )}
            />
          </li>
          <li>
            <Button type="primary" inactive={!isValid} width={screenWidth !== "desktop" && "100%"}>
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
