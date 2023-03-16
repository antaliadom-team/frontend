import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { updateUser } from "../../../services/api/user";
import { Button } from "../../ui/buttons";
import { ModalContext, UserContext } from "../../../services/app-context";
// import {
//   nameValidation,
//   phoneValidation,
//   surnameValidation,
// } from "../../../services/validation";

const EditProfile = ({setUser}) => {
  const navigate = useNavigate();
  const { modal, setModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const {
    control,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  // !! не сохраняет номер телефона
  const onSubmit = ({ first_name = user.first_name, last_name = user.last_name, phone = user.phone }) => {
    updateUser({
      first_name: first_name,
      last_name: last_name,
      phone: phone,
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
                defaultValue={user.first_name}
                //rules={nameValidation}
                render={({ field, fieldState }) => (
                  <TextInput 
                    name={"first_name"} 
                    label="Ваше имя*"
                    placeholder={user.first_name} 
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    //error={fieldState.error}
                    //errorText={errors.first_name?.message}
                  />
                )}
            />
          </li>
          <li>
            <Controller
              control={control}
              name="last_name"
              defaultValue={user.last_name}
              //rules={surnameValidation}
              render={({ field, fieldState }) => (
                <TextInput 
                  name={"last_name"} 
                  label="Ваша фамилия*"
                  placeholder={user.last_name}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                  //error={fieldState.error}
                  //errorText={errors.first_name?.message}
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
            <Controller
              control={control}
              name="phone"
              defaultValue={user.phone}
              render={({ field, fieldState }) => (
                <PhoneInput 
                  name={"phone"} 
                  text="Номер телефона*"
                  currentPhone={user.phone}
                />
              )}
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
