import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { useForm } from "../../../hooks/use-form";
import { updateUser } from "../../../services/api/user";
import { Button } from "../../ui/buttons";
import { ModalContext, UserContext } from "../../../services/app-context";

const EditProfile = ({setUser}) => {
  const { modal, setModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const phoneMasked = `(${user.phone.substring(2,5)}) ${user.phone.substring(5)}`
  const [ formData, setFormData ] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: phoneMasked,
  })
  // const [ firstName, setFirstName ] = useState('');
  // const [ lastName, setLastName ] = useState('');
  // const [ userEmail, setUserEmail ] = useState('');
  // const [ currentPhone, setCurrentPhone ] = useState('');
  // const { values, handleChange } = useForm({ 
  //   first_name: first_name,
  //   last_name: last_name,
  //   email: email,
  //   phone: phone,  
  // });
  const navigate = useNavigate();

  // useEffect(() => {
  //   setFirstName(user.first_name);
  //   setLastName(user.last_name);
  //   setUserEmail(user.email);
  //   setCurrentPhone(`(${user.phone.substring(2,5)}) ${user.phone.substring(5)}`);
  // }, [user]);


//You provided a `value` prop to a form field without an `onChange` handler. 
//This will render a read-only field. If the field should be mutable use `defaultValue`. 
//Otherwise, set either `onChange` or `readOnly`

  // to-do: 
  // отправляем объект с новыми данными. Как отправлять только то что изменилось?
  // надо передавать туда еще setUser
  const submitForm = (e) => {
    e.preventDefault();
    const { first_name, last_name, email, phone } = e.target.elements;
    console.log('334')

    // сейчас не видит value, надо передавать его сюда в компонент
    updateUser({
      first_name: first_name.value,
      last_name: last_name.value,
      email: email.value,
      phone: phone.value,
    }, setUser);
  };

  const handleChange = (e) => {

  }

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Редактировать профиль</h2>
        <Link className={styles.link} to="/edit-password">
          Изменить пароль
        </Link>
        <ul className={styles.list}>
          <li>
            <TextInput name={"first_name"} text="Ваше имя*" handleChange={handleChange} placeholder={formData.firstName} />
          </li>
          <li>
            <TextInput name={"last_name"} text="Ваша фамилия*" handleChange={handleChange} placeholder={formData.lastName} />
          </li>
          <li>
            <TextInput name={"email"} text="Ваш e-mail*" handleChange={handleChange} placeholder={formData.userEmail} />
          </li>
          <li>
            <PhoneInput name={"phone"} text="Номер телефона*" handleChange={handleChange} currentPhone={formData.phone} />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button isSubmit={true} type="primary" onClick={() => setModal({ ...modal, passwordChanged: true })}>Сохранить</Button>
          <Button type="ghost" onClick={() => navigate(-1)}>Отменить</Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
