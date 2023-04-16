import styles from "./login.module.css";
import { Button } from "../../components/ui/buttons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "../../components/ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { emailValidation, passwordValidation } from "../../helpers/validation";
import { useSelector } from "react-redux";
import { useCreateTokenMutation } from "../../store/jwt-api";
import { setCookie } from "../../helpers/cookie";
import { useEffect } from "react";
import { useGetUserMutation } from "../../store/users-api";

const Login = () => {
    const screen = useSelector((store) => store.screen);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [createToken] = useCreateTokenMutation();
    const { isAuth } = useSelector((store) => store.user);
    const [getUser] = useGetUserMutation();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        createToken(data)
            .unwrap()
            .then((res) => {
                setCookie("accessToken", res.access, undefined);
                localStorage.setItem("refreshToken", res.refresh);
            })
            .then(() => {
                getUser();
                navigate("/profile");
            })
            .catch(() => {
                setError("email", {
                    type: "server",
                    message: "Неверный email или пароль",
                });
                setError("password", {
                    type: "server",
                    message: "Неверный email или пароль",
                });
            });
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
                            )}
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
                        <Button type="primary" isSubmit={true} inactive={!isValid} width={screen.desktop && "100%"}>
                            Вход
                        </Button>
                    </li>
                    <li>
                        <p className={styles.text}>
                            <Link className={styles.link} to="/forgot-password">
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
