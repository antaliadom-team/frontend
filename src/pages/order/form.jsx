import { Checkbox, TextareaInput, TextInput } from "../../components/ui/inputs";
import { PrimaryButton } from "../../components/ui/buttons";
import Policy from "../../components/policy/policy";
import styles from "./order.module.css";
import { Controller, useForm } from "react-hook-form";
import {
    emailValidation,
    nameValidation,
    phoneValidation,
    serverValidation,
    surnameValidation,
    textareaValidation,
} from "../../helpers/validation";
import { useSendObjectFormMutation } from "../../store/objects-api";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Form = ({ setOrderSent }) => {
    const { id } = useParams();
    const [success, setSuccess] = useState(false);
    const [sendObjectForm] = useSendObjectFormMutation();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        const submitData = { id: id, body: data };
        sendObjectForm(submitData)
            .unwrap()
            .then(() => {
                setOrderSent(true);
                setSuccess(true);
            })
            .catch((e) => {
                serverValidation(e.data, setError);
            });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <ul className={styles.list}>
                <li className={styles.item}>
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
                                success={success}
                            />
                        )}
                    />
                </li>
                <li className={styles.item}>
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
                                success={success}
                            />
                        )}
                    />
                </li>
                <li className={styles.item}>
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
                                success={success}
                            />
                        )}
                    />
                </li>
                <li className={styles.item}>
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
                                success={success}
                            />
                        )}
                    />
                </li>
                <li className={styles.item}>
                    <Controller
                        control={control}
                        name="comment"
                        rules={textareaValidation}
                        render={({ field, fieldState }) => (
                            <TextareaInput
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={fieldState.error}
                                errorText={errors.comment?.message}
                                success={success}
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
                        <Checkbox value={field.value} onChange={(e) => field.onChange(e)} success={success} />
                    )}
                />
                <Policy />
            </div>
            <div className={styles.button}>
                <PrimaryButton inactive={!isValid} isSubmit={true} width={"100%"}>
                    Отправить заявку
                </PrimaryButton>
            </div>
        </form>
    );
};

export default Form;
