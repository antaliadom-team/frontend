import styles from "./edit-profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { ModalContext } from "../../../services/app-context";
import { UserContext } from "../../../services/app-context";
import { getUser } from '../../../services/api/user';

const EditProfile = () => {
  const { modal, setModal } = useContext(ModalContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const userPhoneMask = `(${user.phone.substring(2,5)}) ${user.phone.substring(5)}`;

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.container}>
        <h2 className={styles.title}>Редактировать профиль</h2>
        <Link className={styles.link} to="/edit-password">
          Изменить пароль
        </Link>
        <ul className={styles.list}>
          <li>
            <TextInput text="Ваше имя*" placeholder={user.first_name} />
          </li>
          <li>
            <TextInput text="Ваша фамилия*" placeholder={user.last_name} />
          </li>
          <li>
            <TextInput text="Ваш e-mail*" placeholder={user.email} />
          </li>
          <li>
            <PhoneInput text="Номер телефона*" userPhone={userPhoneMask} />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button type="primary" onClick={() => setModal({ ...modal, passwordChanged: true })}>Сохранить</Button>
          <Button type="ghost" onClick={() => navigate(-1)}>Отменить</Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
