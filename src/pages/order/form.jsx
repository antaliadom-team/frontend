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
import { useSelector } from "react-redux";

const Form = ({ setOrderSent }) => {
    const { id } = useParams();
    const [success, setSuccess] = useState(false);
    const [sendObjectForm] = useSendObjectFormMutation();
    const { user } = useSelector((store) => store.user);

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
        defaultValues: {
            first_name: user?.first_name,
            last_name: user?.last_name,
            phone: user?.phone,
            email: user?.email
        },
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
                                placeholder="Иван"
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
                                placeholder="Иванов"
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
                                placeholder="+7 123 456 7890"
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
                                placeholder="ivan@mail.ru"
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
                    Оформить заявку
                </PrimaryButton>
            </div>
        </form>
    );
};

export default Form;
