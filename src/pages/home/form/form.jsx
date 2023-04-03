import styles from "./form.module.css";
import { Button } from "../../../components/ui/buttons";
import { useContext, useState } from "react";
import { DataContext } from "../../../services/app-context";
import { useForm } from "react-hook-form";
import { submitMainForm } from "../../../services/api/submit";
import { emailValidation, nameValidation, phoneValidation, surnameValidation } from "../../../services/validation";
import { useDispatch } from "react-redux";
import Selectors from "./selectors/selectors";
import { TextItem, TextareaItem, CheckboxItem } from "./item";

const Form = () => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const { data } = useContext(DataContext);
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        submitMainForm(data, setError, dispatch, setSuccess);
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
                            control={control}
                            validation={nameValidation}
                            errors={errors.first_name?.message}
                            success={success}
                        />
                        <TextItem
                            name="last_name"
                            label="Ваша фамилия*"
                            control={control}
                            validation={surnameValidation}
                            errors={errors.last_name?.message}
                            success={success}
                        />
                        <TextItem
                            name="phone"
                            label="Ваш номер телефона*"
                            control={control}
                            validation={phoneValidation}
                            errors={errors.phone?.message}
                            success={success}
                        />
                        <TextItem
                            name="email"
                            label="Ваш email*"
                            control={control}
                            validation={emailValidation}
                            errors={errors.email?.message}
                            success={success}
                        />
                        <Selectors control={control} data={data} success={success} />
                        <TextareaItem name="comment" control={control} errors={errors.comment?.message} success={success} />
                    </ul>
                    <CheckboxItem name="agreement" control={control} success={success} />
                    <div className={styles.button}>
                        <Button type="primary" inactive={!isValid} isSubmit={true}>
                            Отправить заявку
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;
