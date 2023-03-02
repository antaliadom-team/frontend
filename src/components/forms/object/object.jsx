import React, { useContext, useState } from "react";
import styles from "./object.module.css";
import mainForm from "../main/main.module.css";
import CatalogItem from "../../catalog-item/catalog-item";
import { Checkbox, TextareaInput, TextInput, PhoneInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { ModalContext } from "../../../services/app-context";
import { useNavigate } from "react-router-dom";

const Object = () => {
  const [sendSuccess, setSendSuccess] = useState(false);
  const { setModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const sendForm = (e) => {
    e.preventDefault();
    setSendSuccess(true);
  };

  const toHome = (e) => {
    e.preventDefault();
    setModal(false);
    navigate("/", {replace: true})
  };

  return (
    <div className={styles.wrapper}>
      {sendSuccess ? (
        <>
          <h1 className={styles.title}>Ваша заявка отправлена!</h1>
          <div className={styles.mb32}/>
          <CatalogItem withBtn={false} />
          <div className={styles.link} onClick={toHome}>
            <Button type="primary">На главную</Button>
          </div>
        </>
      ) : (
        <>
          <h1 className={styles.title}>Оформить заявку</h1>
          <p className={styles.subtitle}>
            Вы оформляете заявку на следующий объект
          </p>
          <CatalogItem withBtn={false} />
          <form className={mainForm.form} onSubmit={sendForm}>
            <ul className={mainForm.list}>
              <li className={mainForm.item}>
                <TextInput text={"Имя*"} placeholder={"Иван"} />
              </li>
              <li className={mainForm.item}>
                <TextInput text={"Фамилия*"} placeholder={"Иванов"} />
              </li>
              <li className={mainForm.item}>
                <PhoneInput
                  text={"Номер телефона*"}
                  placeholder={"+7 999 123 45 67"}
                />
              </li>
              <li className={mainForm.item}>
                <TextInput text={"Email*"} placeholder={"mymail@mail.ru"} />
              </li>
              <li className={mainForm.item}>
                <TextareaInput />
              </li>
            </ul>
            <div className={mainForm.checkbox}>
              <Checkbox>
                Я согласен с&nbsp;
                <a href="/policy" className={mainForm.link}>
                  Политикой конфиденциальности
                </a>
                &nbsp;и&nbsp;
                <a href="/policy" className={mainForm.link}>
                  Условиями использования сервиса
                </a>
              </Checkbox>
            </div>
            <div className={mainForm.button}>
              <Button type="primary">Отправить заявку</Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Object;
