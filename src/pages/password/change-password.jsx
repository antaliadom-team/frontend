import styles from "./password.module.css";
import { Button } from "../../components/ui/buttons";
import { TextInput } from "../../components/ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { confirmPassValidation, passwordValidation, serverValidation } from "../../helpers/validation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Success from "./success";
import { useConfirmPasswordMutation } from "../../store/users-api";


const ChangePassword = () => {
    const [success, setSuccess] = useState(false);
    const [confirmPassword] = useConfirmPasswordMutation();

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
        confirmPassword({ ...data, uid, token })
          .unwrap()
          .then(() => {
              setSuccess(true);
          })
          .catch((errors) => {
              serverValidation(errors, setError);
          });
    };

    if (success) {
        return <Success />
    }


    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Изменить пароль</h2>
                <p className={styles.text}>Пароль сброшен! Введите, пожалуйста, новый пароль.</p>
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

export default ChangePassword;
