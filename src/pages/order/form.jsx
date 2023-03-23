import { Checkbox, TextareaInput, TextInput } from "../../components/ui/inputs";
import { Button } from "../../components/ui/buttons";
import Policy from "../../components/policy/policy";
import styles from "./order.module.css";
import { Controller, useForm } from "react-hook-form";
import {
  emailValidation,
  nameValidation,
  phoneValidation,
  surnameValidation,
  textareaValidation
} from "../../services/validation";
import { submitObjectForm } from "../../services/api/submit";
import { useEffect, useState } from "react";

const Form = ({setSuccess, id}) => {
  const [submitSuccess, setSubmitSuccess] = useState();

  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    submitObjectForm(data, setError, id, setSubmitSuccess);
    reset(data);
  };

  useEffect(() => {
    setSuccess(submitSuccess);
  }, [isSubmitSuccessful]);

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
        <Button type="primary" inactive={!isValid} isSubmit={true} width={"100%"}>
          Отправить заявку
        </Button>
      </div>
    </form>
  );
};

export default Form;
