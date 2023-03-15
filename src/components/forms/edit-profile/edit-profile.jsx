import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { updateUser } from "../../../services/api/user";
import { Button } from "../../ui/buttons";
import { ModalContext, UserContext } from "../../../services/app-context";
import {
  nameValidation,
  phoneValidation,
  surnameValidation,
} from "../../../services/validation";

const EditProfile = ({setUser}) => {
  const { modal, setModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  //const phoneMasked = `(${user.phone.substring(2,5)}) ${user.phone.substring(5)}`
  // const [ formData, setFormData ] = useState({
  //   first_name: user.first_name,
  //   last_name: user.last_name,
  //   phone: user.phone,
  // })
  //console.log(formData.first_name)

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });


  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('you submitted the form!')
    console.log(data);
    updateUser({
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
    }, setUser);
  };
  
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <h2 className={styles.title}>Редактировать профиль</h2>
        <Link className={styles.link} to="/edit-password">
          Изменить пароль
        </Link>
        <ul className={styles.list}>
          <li>
            <Controller
                control={control}
                name="first_name"
                rules={nameValidation}
                render={({ field, fieldState }) => (
                  <TextInput 
                    name={"first_name"} 
                    label="Ваше имя*"
                    placeholder={user.first_name} 
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={fieldState.error}
                    errorText={errors.first_name?.message}
                  />
                )}
            />
          </li>
          <li>
            <Controller
              control={control}
              name="last_name"
              rules={nameValidation}
              render={({ field, fieldState }) => (
                <TextInput 
                  name={"last_name"} 
                  label="Ваша фамилия*"
                  placeholder={user.last_name}
                  onChange={(e) => field.onChange(e)}
                  value={field.value} 
                  error={fieldState.error}
                  errorText={errors.first_name?.message}
                />
              )}
            />
          </li>
          <li>
            <TextInput 
              name={"email"} 
              label="Ваш e-mail*" 
              disabled={true} 
              readOnly={true} 
              value={user.email}
            />
          </li>
          <li>
            <PhoneInput 
              name={"phone"} 
              text="Номер телефона*"
              currentPhone={user.phone} 
            />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button 
            isSubmit={true} 
            type="primary" 
            onClick={() => setModal({ ...modal, passwordChanged: true })}
            >
            Сохранить
          </Button>
          <Button 
            type="ghost" 
            onClick={() => navigate(-1)}
            >Отменить
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
