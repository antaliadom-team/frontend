import styles from "./main.module.css";
import { Button, Tag } from "../../ui/buttons";
import { Checkbox, Dropdown, TextareaInput, TextInput } from "../../ui/inputs";
import { useContext } from "react";
import { DataContext } from "../../../services/app-context";
import Policy from "../../policy/policy";
import { Controller, useForm } from "react-hook-form";
import { submitMainForm } from "../../../services/api/submit";
import {
    emailValidation,
    nameValidation,
    phoneValidation,
    surnameValidation,
    textareaValidation,
} from "../../../services/validation";
import { useDispatch, useSelector } from "react-redux";

const MainForm = () => {
    const screen = useSelector(store => store.screen);
    const dispatch = useDispatch();
    const { data } = useContext(DataContext);
    const {
        control,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isValid },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        submitMainForm(data, setError, dispatch);
        reset(data);
    };

    const renderSelectors = () => {
        if (screen.desktop) {
            return (
                <>
                    <li className={styles.item}>
                        <Controller
                            control={control}
                            name="category"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Dropdown
                                    label={"Аренда/Покупка"}
                                    options={data?.categories}
                                    onChange={(e) => field.onChange(e)}
                                />
                            )}
                        />
                    </li>
                    <li className={styles.item}>
                        <Controller
                            control={control}
                            name="location"
                            render={({ field }) => (
                                <Dropdown
                                    label={"Локация"}
                                    multi={true}
                                    options={data?.locations}
                                    onChange={(e) => field.onChange(e)}
                                />
                            )}
                        />
                    </li>
                    <li className={styles.item}>
                        <Controller
                            control={control}
                            name="property_type"
                            render={({ field }) => (
                                <Dropdown
                                    label={"Тип недвижимости"}
                                    multi={true}
                                    options={data?.types}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                />
                            )}
                        />
                    </li>
                    <li className={styles.item}>
                        <Controller
                            control={control}
                            name="rooms"
                            render={({ field }) => (
                                <Dropdown
                                    label={"Количество комнат"}
                                    multi={true}
                                    options={[
                                        { id: 0, name: "1" },
                                        { id: 1, name: "2" },
                                        { id: 2, name: "3" },
                                        { id: 3, name: "4+" },
                                    ]}
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                />
                            )}
                        />
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <Controller
                        control={control}
                        name="category"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <Tag
                                selectors={data?.categories}
                                onceSelect={true}
                                onChange={(e) => field.onChange(e)}
                                text={"Аренда/Покупка*"}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="location"
                        render={({ field }) => (
                            <Tag selectors={data?.locations} text={"Локация"} onChange={(e) => field.onChange(e)} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="property_type"
                        render={({ field }) => (
                            <Tag
                                selectors={data?.types}
                                text={"Тип недвижимости"}
                                onChange={(e) => field.onChange(e)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="rooms"
                        render={({ field }) => (
                            <Tag
                                selectors={[
                                    { id: 0, name: "1" },
                                    { id: 1, name: "2" },
                                    { id: 2, name: "3" },
                                    { id: 3, name: "4+" },
                                ]}
                                text={"Количество комнат"}
                                onChange={(e) => field.onChange(e)}
                            />
                        )}
                    />
                </>
            );
        }
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
                                    />
                                )}
                            />
                        </li>

                        {renderSelectors()}

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
                            render={({ field }) => <Checkbox value={field.value} onChange={(e) => field.onChange(e)} />}
                        />
                        <Policy />
                    </div>
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

export default MainForm;
