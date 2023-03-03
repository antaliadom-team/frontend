import styles from "./main.module.css";
import { Button, Tag } from "../../ui/buttons";
import { Checkbox, Dropdown, TextareaInput, TextInput, PhoneInput } from "../../ui/inputs";
import { useContext } from "react";
import { ScreenWidthContext } from "../../../services/app-context";

const MainForm = () => {
  const {screenWidth} = useContext(ScreenWidthContext);

  const renderSelectors = () => {
    if (screenWidth === "desktop") {
      return (
        <>
          <li className={styles.item}>
            <Dropdown
              text={"Аренда/Покупка"}
              options={["Аренда", "Покупка"]}
            />
          </li>
          <li className={styles.item}>
            <Dropdown
              text={"Локация"}
              options={["Анталия", "Северный Кипр", "Стамбул", "другое"]}
            />
          </li>
          <li className={styles.item}>
            <Dropdown
              text={"Тип недвижимости"}
              options={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]}
            />
          </li>
          <li className={styles.item}>
            <Dropdown
              text={"Количество комнат"}
              options={["1", "2", "3", "4+"]}
            />
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <Tag selectors={["Аренда", "Покупка"]} onceSelect={true} />
          <Tag selectors={["Анталия", "Сев. Кипр", "Стамбул", "другое"]} text={"Локация"} />
          <Tag selectors={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]} text={"Тип недвижимости"} />
          <Tag selectors={["1", "2", "3", "4+"]} text={"Количество комнат"} />
        </>
      )
    }
  }
  
  return (
    <section id="send" className={styles.main}>
      <div className={styles.border} />
      <div className={styles.container}>
        <h2 className={styles.title}>
          Оставить заявку <br />
          на подбор недвижимости
        </h2>
        <p className={styles.subtitle}>
          Пожалуйста, заполните ваши данные и мы свяжемся с Вами в
          ближайшее&nbsp;время
        </p>
        <form className={styles.form}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <TextInput text={"Имя*"} placeholder={"Иван"} />
            </li>
            <li className={styles.item}>
              <TextInput text={"Фамилия*"} placeholder={"Иванов"} />
            </li>
            <li className={styles.item}>
                <PhoneInput
                  text={"Номер телефона*"}
                  placeholder={"+7 999 123 45 67"}
                />
              </li>
            <li className={styles.item}>
              <TextInput
                text={"Email*"}
                placeholder={"mymail@mail.ru"} />
            </li>

            {renderSelectors()}

            <li className={styles.item}>
              <TextareaInput />
            </li>
          </ul>
          <div className={styles.checkbox}>
            <Checkbox>
              Я согласен с&nbsp;
              <a href="/policy" className={styles.link}>
                Политикой конфиденциальности
              </a>
              &nbsp;и&nbsp;
              <a href="/policy" className={styles.link}>
                Условиями использования сервиса
              </a>
            </Checkbox>
          </div>
          <div className={styles.button}>
            <Button type="primary">Отправить заявку</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
