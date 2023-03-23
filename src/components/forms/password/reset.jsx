import styles from "./edit-password.module.css";
import { Button } from "../../ui/buttons";
import { TextInput } from "../../ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { emailValidation } from "../../../services/validation";
import { resetPassword } from "../../../services/api/password";

const Reset = ({ setCorrect }) => {
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
    };

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
                    <Button type="primary" isSubmit="true">
                        Сбросить пароль
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Reset;
