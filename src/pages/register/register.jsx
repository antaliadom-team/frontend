import styles from "./register.module.css";
import { Checkbox, TextInput } from "../../components/ui/inputs";
import { PrimaryButton } from "../../components/ui/buttons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Policy from "../../components/policy/policy";
import { useForm, Controller } from "react-hook-form";
import {
    confirmPassValidation,
    emailValidation,
    nameValidation,
    passwordValidation,
    phoneValidation,
    serverValidation,
    surnameValidation,
} from "../../helpers/validation";
import Success from "./success";
import { useRegisterUserMutation } from "../../store/users-api";
import { useRedirect } from "../../hooks/use-redirect";

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [registerUser] = useRegisterUserMutation();

    const {
        control,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    useRedirect();

    const onSubmit = (data) => {
        registerUser(data)
            .unwrap()
            .then((res) => {
                console.log(res)
                setSuccess(true);
            })
            .catch((errors) => {
                console.log(errors)
                serverValidation(errors.data, setError);
            });
    };

    return (
        <>
            {success ? (
                <Success />
            ) : (
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Регистрация</h2>
                        <ul className={styles.list}>
                            <li>
                                <Controller
                                    control={control}
                                    name="first_name"
                                    rules={nameValidation}
                                    render={({ field, fieldState }) => (
                                        <TextInput
                                            type="text"
                                            label="Ваше имя*"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={fieldState.error}
                                            errorText={errors.first_name?.message}
                                        />
                                    )}
                                />
                            </li>
                            <li>
                                <Controller
                                    control={control}
                                    name="last_name"
                                    rules={surnameValidation}
                                    render={({ field, fieldState }) => (
                                        <TextInput
                                            type="text"
                                            label="Ваша фамилия*"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={fieldState.error}
                                            errorText={errors.last_name?.message}
                                        />
                                    )}
                                />
                            </li>
                            <li>
                                <Controller
                                    control={control}
                                    name="email"
                                    rules={emailValidation}
                                    render={({ field, fieldState }) => (
                                        <TextInput
                                            type="text"
                                            label="Ваш email*"
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
                                    name="phone"
                                    rules={phoneValidation}
                                    render={({ field, fieldState }) => (
                                        <TextInput
                                            type="text"
                                            label="Ваш номер телефона*"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={fieldState.error}
                                            errorText={errors.phone?.message}
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
                                            label="Пароль*"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={fieldState.error}
                                            errorText={errors.password?.message}
                                        />
                                    )}
                                />
                            </li>
                            <li>
                                <Controller
                                    control={control}
                                    name="re_password"
                                    rules={confirmPassValidation(watch, "password")}
                                    render={({ field, fieldState }) => (
                                        <TextInput
                                            type="password"
                                            label="Подтвердите пароль*"
                                            onChange={(e) => field.onChange(e)}
                                            value={field.value}
                                            error={fieldState.error}
                                            errorText={errors.re_password?.message}
                                        />
                                    )}
                                />
                            </li>
                        </ul>
                        <div className={styles.checkbox}>
                            <Controller
                                control={control}
                                name="agreement"
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <Checkbox value={field.value} onChange={(e) => field.onChange(e)} />
                                )}
                            />
                            <Policy />
                        </div>
                        <div className={styles.buttons}>
                            <PrimaryButton inactive={!isValid} isSubmit={true}>
                                Зарегистрироваться
                            </PrimaryButton>
                        </div>
                        <p className={styles.text}>
                            Уже есть аккаунт?&nbsp;
                            <Link className={styles.link} to="/login">
                                Вход
                            </Link>
                        </p>
                    </div>
                </form>
            )}
        </>
    );
};

export default Register;
