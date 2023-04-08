import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { updateUser } from "../../../services/api/user";
import { Button } from "../../ui/buttons";
import { UserContext } from "../../../services/app-context";
import {openPasswordChanged} from "../../../store/modal-slice";
import { useDispatch } from "react-redux";


const EditProfile = ({setUser}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useContext(UserContext);
  const {
    control,
    handleSubmit,
  } = useForm({
    mode: "all",
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      phone: user.phone,
    }
  });

  const onSubmit = (formData) => {
    dispatch(openPasswordChanged());
    const data = {};
    for (const key in formData) {
      if (formData[key] !== user[key]) {
        data[key] = formData[key];
      }
    }
    updateUser(data, setUser);
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
              render={({ field, fieldState }) => (
                <PhoneInput 
                  name={"phone"} 
                  text="Номер телефона*"
                  currentPhone={user.phone}
                  onChange={(e) => field.onChange(e)}
                  value={field.value}
                />
              )}
            />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button 
            isSubmit={true} 
            type="primary"
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