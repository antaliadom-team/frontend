import React, { useContext, useState } from "react";
import styles from "./object-form.module.css";
import mainForm from "../main-form/main-form.module.css";
import CatalogItem from "../../catalog-item/catalog-item";
import { Checkbox, TextareaInput, TextInput, PhoneInput } from "../../ui/inputs";
import { Button } from "../../ui/buttons";
import { ModalContext } from "../../../services/app-context";
import { useNavigate } from "react-router-dom";

const ObjectForm = () => {
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
          <div className={styles.mb32}></div>
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
          <form className={mainForm.mainForm__form} onSubmit={sendForm}>
            <ul className={mainForm.mainForm__list}>
              <li className={mainForm.mainForm__item}>
                <TextInput text={"Имя*"} placeholder={"Иван"} />
              </li>
              <li className={mainForm.mainForm__item}>
                <TextInput text={"Фамилия*"} placeholder={"Иванов"} />
              </li>
              <li className={mainForm.mainForm__item}>
                <PhoneInput
                  text={"Номер телефона*"}
                  placeholder={"+7 999 123 45 67"}
                />
              </li>
              <li className={mainForm.mainForm__item}>
                <TextInput text={"Email*"} placeholder={"mymail@mail.ru"} />
              </li>
              <li className={mainForm.mainForm__item}>
                <TextareaInput />
              </li>
            </ul>
            <div className={mainForm.mainForm__checkbox}>
              <Checkbox>
                Я согласен с&nbsp;
                <a href="/policy" className={mainForm.mainForm__link}>
                  Политикой конфиденциальности
                </a>
                &nbsp;и&nbsp;
                <a href="/policy" className={mainForm.mainForm__link}>
                  Условиями использования сервиса
                </a>
              </Checkbox>
            </div>
            <div className={mainForm.mainForm__button}>
              <Button type="primary">Отправить заявку</Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ObjectForm;
