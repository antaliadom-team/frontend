import styles from "./main.module.css";
import { Button, Tag } from "../../ui/buttons";
import { Checkbox, Dropdown, TextareaInput, TextInput, PhoneInput } from "../../ui/inputs";
import { useContext } from "react";
import { ScreenWidthContext } from "../../../services/app-context";
import {Link} from "react-router-dom";
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

const MainForm = () => {
  const { screenWidth } = useContext(ScreenWidthContext);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    // submitMainForm(data, setError);
    console.log(data)
  };

  const renderSelectors = () => {
    if (screenWidth === "desktop") {
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
                  options={[
                    { id: 0, name: "Аренда" },
                    { id: 1, name: "Покупка" },
                  ]}
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
                  options={[
                    { id: 0, name: "Анталия" },
                    { id: 1, name: "Северный Кипр" },
                    { id: 2, name: "Стамбул" },
                    { id: 3, name: "другое" },
                  ]}
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
                  options={[
                    { id: 0, name: "Вилла" },
                    { id: 1, name: "Дом" },
                    { id: 2, name: "Участок" },
                    { id: 3, name: "Апартаменты" },
                    { id: 4, name: "Комната" },
                  ]}
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
                selectors={["Аренда", "Покупка"]}
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
              <Tag
                selectors={["Анталия", "Сев. Кипр", "Стамбул", "другое"]}
                text={"Локация"}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            control={control}
            name="property_type"
            render={({ field }) => (
              <Tag
                selectors={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]}
                text={"Тип недвижимости"}
                onChange={(e) => field.onChange(e)}
              />
            )}
          />
          <Controller
            control={control}
            name="rooms"
            render={({ field }) => (
              <Tag selectors={["1", "2", "3", "4+"]} text={"Количество комнат"} onChange={(e) => field.onChange(e)} />
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
        <p className={styles.subtitle}>Пожалуйста, заполните ваши данные и мы свяжемся с Вами в ближайшее&nbsp;время</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Controller
                defaultValue=""
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
              render={({ field }) => (
                <Checkbox value={field.value} onChange={(e) => field.onChange(e)}>
                  <Policy/>
                </Checkbox>
              )}
            />
          </div>
          <div className={styles.button}>
            <Button type="primary" inactive={!isValid}>
              Отправить заявку
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
