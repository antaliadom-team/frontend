import styles from "./edit-password.module.css";
import { useEffect } from "react";
import { Button } from "../../ui/buttons";
import { TextInput } from "../../ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { confirmPassValidation, passwordValidation } from "../../../services/validation";
import { useParams } from "react-router-dom";
import { confirmPassword } from "../../../services/api/password";
import Success from "./success";

const Change = ({ successPassword, setSuccessPassword }) => {
    const {
        control,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const { uid, token } = useParams();

    const onSubmit = (data) => {
        // confirmPassword({ ...data, uid, token }, setError, setSuccessPassword);
    };

    useEffect(() => {
        if (successPassword) {
            return <Success setSuccessPassword={setSuccessPassword}>Пароль изменен</Success>;
        }
    }, [successPassword]);

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Изменить пароль</h2>
                <p className={styles.text}>Введите новый пароль</p>
                <ul className={styles.list}>
                    <li>
                        <Controller
                            control={control}
                            name="new_password"
                            rules={passwordValidation}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    type="password"
                                    label="Пароль"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={fieldState.error}
                                    errorText={errors.new_password?.message}
                                />
                            )}
                        />
                    </li>
                    <li>
                        <Controller
                            control={control}
                            name="re_new_password"
                            rules={confirmPassValidation(watch, "new_password")}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    type="password"
                                    label="Подтвердите пароль"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={fieldState.error}
                                    errorText={errors.re_new_password?.message}
                                />
                            )}
                        />
                    </li>
                </ul>
                <div className={styles.buttons}>
                    <Button type="primary" isSubmit="true" inactive={!isValid}>
                        Сбросить пароль
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Change;
