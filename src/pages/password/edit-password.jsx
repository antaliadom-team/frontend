import styles from "./password.module.css";
import { Controller, useForm } from "react-hook-form";
import { confirmPassValidation, passwordValidation, serverValidation } from "../../helpers/validation";
import { TextInput } from "../../components/ui/inputs";
import { PrimaryButton } from "../../components/ui/buttons";
import { useState } from "react";
import Success from "./success";
import { useChangePasswordMutation } from "../../store/users-api";
import ProtectedRoute from "../../components/protected-route/protected-route";

const EditPassword = () => {
    const [success, setSuccess] = useState(false);
    const [changePassword] = useChangePasswordMutation();

    const {
        control,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        changePassword(data)
            .unwrap()
            .then(() => {
                setSuccess(true);
            })
            .catch((errors) => {
                serverValidation(errors, setError);
            });
    };

    if (success) {
        return <Success />;
    }

    return (
        <ProtectedRoute>
            <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.container}>
                    <h2 className={styles.title}>Изменить пароль</h2>
                    <ul className={styles.list}>
                        <li>
                            <Controller
                                control={control}
                                name="current_password"
                                rules={passwordValidation}
                                render={({ field, fieldState }) => (
                                    <TextInput
                                        type="password"
                                        label="Введите текущий пароль*"
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                        error={fieldState.error}
                                        errorText={errors.current_password?.message}
                                    />
                                )}
                            />
                        </li>
                        <li>
                            <Controller
                                control={control}
                                name="new_password"
                                rules={passwordValidation}
                                render={({ field, fieldState }) => (
                                    <TextInput
                                        type="password"
                                        label="Введите новый пароль*"
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
                                        label="Подтвердите новый пароль*"
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
                        <PrimaryButton isSubmit="true" width={"100%"} inactive={!isValid}>
                            Сохранить новый пароль
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </ProtectedRoute>
    );
};

export default EditPassword;
