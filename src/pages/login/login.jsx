import styles from "./login.module.css";
import { PrimaryButton } from "../../components/ui/buttons";
import { Link, useParams } from "react-router-dom";
import { TextInput } from "../../components/ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { emailValidation, passwordValidation } from "../../helpers/validation";
import { useSelector } from "react-redux";
import { useCreateTokenMutation } from "../../store/jwt-api";
import { setCookie } from "../../helpers/cookie";
import { useRedirect } from "../../hooks/use-redirect";
import { useEffect } from "react";
import { useActivateUserMutation } from "../../store/users-api";

const Login = () => {
    const screen = useSelector((store) => store.screen);
    const [createToken] = useCreateTokenMutation();
    const [activateUser] = useActivateUserMutation();
    const params = useParams();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    useRedirect();

    const onSubmit = (data) => {
        createToken(data)
            .unwrap()
            .then((res) => {
                setCookie("accessToken", res.access, { expires: 1000 });
                localStorage.setItem("refreshToken", res.refresh);
            })
            .then(() => {
                window.location.reload();
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
        if (Object.keys(params).length !== 0) {
            activateUser(params)
                .unwrap()
                .then(res => {
                    console.log(res)
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }, [])


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
                        <PrimaryButton isSubmit={true} inactive={!isValid} width={screen.desktop && "100%"}>
                            Вход
                        </PrimaryButton>
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
