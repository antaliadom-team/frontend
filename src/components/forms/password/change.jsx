import styles from "./edit-password.module.css";
import { Button } from "../../ui/buttons";
import { TextInput } from "../../ui/inputs";
import { useForm, Controller } from "react-hook-form";
import { passwordValidation } from "../../../services/validation";

const Change = ({ setCorrect }) => {
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        // setCorrect(true);
        console.log(data);
    };
    return (
        <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Изменить пароль</h2>
                <p className={styles.text}>Введите новый пароль</p>
                <ul className={styles.list}>
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
                </ul>
                <div className={styles.buttons}>
                    <Button type="primary" isSubmit="true">
                        Сбросить пароль
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Change;
