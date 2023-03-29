import styles from "./password.module.css";
import { Controller, useForm } from "react-hook-form";
import { confirmPassValidation, passwordValidation } from "../../services/validation";
import { TextInput } from "../../components/ui/inputs";
import { Button } from "../../components/ui/buttons";
import { changePassword } from "../../services/api/password";
import { useState } from "react";
import Success from "./success";

const EditPassword = () => {
    const [success, setSuccess] = useState(false);

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
        changePassword(data, setError, setSuccess);
    };

  if (success) {
    return <Success />
  }

    return (
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
                    <Button type="primary" isSubmit="true" width={"100%"} inactive={!isValid}>
                        Сохранить новый пароль
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default EditPassword;
