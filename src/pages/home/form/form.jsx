import styles from "./form.module.css";
import { PrimaryButton } from "../../../components/ui/buttons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    emailValidation,
    nameValidation,
    phoneValidation,
    serverValidation,
    surnameValidation,
} from "../../../helpers/validation";
import { useDispatch } from "react-redux";
import Selectors from "./selectors/selectors";
import { TextItem, TextareaItem, CheckboxItem } from "./item";
import { useSendMainFormMutation } from "../../../store/objects-api";
import { openSubmit } from "../../../store/modal-slice";

const Form = () => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const [sendMainForm] = useSendMainFormMutation();

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        const body = {
            ...data,
            category: data.category[0].id,
            location: data.location?.map((item) => item.id),
            property_type: data.property_type?.map((item) => item.id),
            rooms: data.rooms?.map((item) => item.name),
        };
        sendMainForm(body)
            .unwrap()
            .then(() => {
                dispatch(openSubmit());
                setSuccess(true);
            })
            .catch((e) => {
                serverValidation(e.data, setError);
            });
    };

    return (
        <section id="send" className={styles.main}>
            <div className={styles.border} />
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Оставить заявку <br />
                    на подбор недвижимости
                </h2>
                <p className={styles.subtitle}>
                    Пожалуйста, заполните ваши данные и мы свяжемся с Вами в ближайшее&nbsp;время
                </p>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <ul className={styles.list}>
                        <TextItem
                            name="first_name"
                            label="Ваше имя*"
                            placeholder="Иван"
                            control={control}
                            validation={nameValidation}
                            errors={errors.first_name?.message}
                            success={success}
                        />
                        <TextItem
                            name="last_name"
                            label="Ваша фамилия*"
                            placeholder="Иванов"
                            control={control}
                            validation={surnameValidation}
                            errors={errors.last_name?.message}
                            success={success}
                        />
                        <TextItem
                            name="phone"
                            label="Ваш номер телефона*"
                            placeholder="+7 123 456 7890"
                            control={control}
                            validation={phoneValidation}
                            errors={errors.phone?.message}
                            success={success}
                        />
                        <TextItem
                            name="email"
                            label="Ваш email*"
                            placeholder="ivan@mail.ru"
                            control={control}
                            validation={emailValidation}
                            errors={errors.email?.message}
                            success={success}
                        />
                        <Selectors control={control} success={success} />
                        <TextareaItem
                            name="comment"
                            control={control}
                            errors={errors.comment?.message}
                            success={success}
                        />
                    </ul>
                    <CheckboxItem name="agreement" control={control} success={success} />
                    <div className={styles.button}>
                        <PrimaryButton inactive={!isValid} isSubmit={true}>
                            Оформить заявку
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;
