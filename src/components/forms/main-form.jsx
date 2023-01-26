import styles from "./main-form.module.css";
import { Button } from "../ui/buttons";
import {
  Checkbox,
  Dropdown,
  EmailInput,
  PhoneInput,
  TextareaInput,
  TextInput,
} from "../ui/inputs";

const MainForm = () => {
  return (
    <section id="send" className={styles.mainForm}>
      <div className={styles.border} />
      <div className={styles.mainForm__container}>
        <h2 className={styles.mainForm__title}>
          Оставить заявку <br />
          на подбор недвижимости
        </h2>
        <p className={styles.mainForm__subtitle}>
          Пожалуйста, заполните ваши данные и мы свяжемся с Вами в
          ближайшее&nbsp;время
        </p>
        <form className={styles.mainForm__form}>
          <ul className={styles.mainForm__list}>
            <li className={styles.mainForm__item}>
              <TextInput text={"Имя*"} placeholder={"Иван"} />
            </li>
            <li className={styles.mainForm__item}>
              <TextInput text={"Фамилия*"} placeholder={"Иванов"} />
            </li>
            <li className={styles.mainForm__item}>
              <PhoneInput
                text={"Номер телефона*"}
                placeholder={"+7 999 123 45 67"}
              />
            </li>
            <li className={styles.mainForm__item}>
              <EmailInput text={"Email*"} placeholder={"mymail@mail.ru"} />
            </li>
            <li className={styles.mainForm__item}>
              <Dropdown
                text={"Аренда/Покупка"}
                options={["Аренда", "Покупка"]}
              />
            </li>
            <li className={styles.mainForm__item}>
              <Dropdown
                text={"Локация"}
                options={["Анталия", "Северный Кипр", "Стамбул", "другое"]}
              />
            </li>
            <li className={styles.mainForm__item}>
              <Dropdown
                text={"Тип недвижимости"}
                options={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]}
              />
            </li>
            <li className={styles.mainForm__item}>
              <Dropdown
                text={"Количество комнат"}
                options={["1", "2", "3", "4+"]}
              />
            </li>
            <li className={styles.mainForm__item}>
              <TextareaInput />
            </li>
          </ul>
          <div className={styles.mainForm__checkbox}>
            <Checkbox>
              Я согласен с&nbsp;
              <a href="/policy" className={styles.mainForm__link}>
                Политикой конфиденциальности
              </a>
              &nbsp;и&nbsp;
              <a href="/policy" className={styles.mainForm__link}>
                Условиями использования сервиса
              </a>
            </Checkbox>
          </div>
          <div className={styles.mainForm__button}>
            <Button type="primary">Отправить заявку</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
