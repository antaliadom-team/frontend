import styles from "../password.module.css";
import { Controller, useForm } from "react-hook-form";
import { emailValidation } from "../../../services/validation";
import { TextInput } from "../../../components/ui/inputs";
import { Button } from "../../../components/ui/buttons";
import { resetPassword } from "../../../services/api/password";
import { useState } from "react";
import ConfirmEmail from "./confirm-email";

const ForgotPassword = () => {
    const [confirm, setConfirm] = useState(false);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        resetPassword(data, setError);
        setConfirm(true);
    };

    if (confirm) {
        return <ConfirmEmail />;
    }

    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Изменить пароль</h2>
                <p className={styles.text}>
                    Для изменения пароля введите, пожалуйста, ваш e-mail и мы пришлем вам на почту письмо со ссылкой для
                    сброса пароля
                </p>
                <div className={styles.item}>
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
                </div>
                <div className={styles.buttons}>
                    <Button type="primary" isSubmit="true" inactive={!isValid}>
                        Сбросить пароль
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default ForgotPassword;
