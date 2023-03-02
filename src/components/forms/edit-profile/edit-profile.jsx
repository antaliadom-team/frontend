import styles from "./edit-profile.module.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { PhoneInput, TextInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { ModalContext } from "../../../services/app-context";

const EditProfile = () => {
  const { modal, setModal } = useContext(ModalContext);
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
            <TextInput text="Ваше имя*" placeholder="Иван" />
          </li>
          <li>
            <TextInput text="Ваша фамилия*" placeholder="Иванов" />
          </li>
          <li>
            <TextInput text="Ваш e-mail*" placeholder="ivanov@mail.ru" />
          </li>
          <li>
            <PhoneInput text="Номер телефона*" />
          </li>
        </ul>
        <div className={styles.buttons}>
          <Button type="primary" onClick={() => setModal({ ...modal, passwordChanged: true })}>Сохранить</Button>
          <Button type="ghost">Отменить</Button>
        </div>
      </div>
    </form>
  );
};

export default EditProfile;
