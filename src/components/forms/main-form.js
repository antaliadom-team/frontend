import styles from "./main-form.module.css";
import checkbox from "../../images/checkbox.svg";

const MainForm = () => {
  return (
    <section className={styles.mainForm}>
      <div className={styles.mainForm__block} />
      <div className={styles.mainForm__container}>
        <h2 className={styles.mainForm__title}>
          Оставить заявку <br />
          на подбор недвижимости
        </h2>
        <p className={styles.mainForm__subtitle}>
          Пожалуйста, заполните ваши данные и мы свяжемся с Вами в ближайшее
          время
        </p>
        <form className={styles.mainForm__form}>
          <ul className={styles.mainForm__items}>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Имя*</p>
              <input
                type="text"
                placeholder="Иван"
                className={styles.mainForm__input}
              />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Фамилия*</p>
              <input placeholder="Иванов" className={styles.mainForm__input} />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Номер телефона*</p>
              <input
                type="text"
                placeholder="+7 921 123 45 67"
                className={styles.mainForm__input}
              />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Email*</p>
              <input
                type="text"
                placeholder="ivanov@mail.ru"
                className={styles.mainForm__input}
              />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Аренда/Покупка</p>
              <input type="text" className={styles.mainForm__input} />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Область</p>
              <input type="text" className={styles.mainForm__input} />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Тип недвижимости</p>
              <input type="text" className={styles.mainForm__input} />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Количество комнат</p>
              <input type="text" className={styles.mainForm__input} />
            </li>
            <li className={styles.mainForm__item}>
              <p className={styles.mainForm__itemTitle}>Комментарий</p>
              <textarea
                type="text"
                placeholder="Например, нужно рассмотреть как можно скорее"
                className={styles.mainForm__input_comment}
                maxLength="100"
                cols="1"
                rows="3"
              />
            </li>
          </ul>
          <div className={styles.mainForm__checkbox}>
            <img
              className={styles.mainForm__checkboxImage}
              src={checkbox}
              alt="чекбокс"
            />
            <p className={styles.mainForm__accept}>
              Я согласен с&nbsp;
              <a className={styles.mainForm__accept_color} href="#">
                Политикой конфиденциальности{" "}
              </a>
              и&nbsp;
              <a className={styles.mainForm__accept_color} href="#">
                Условиями использования сервиса
              </a>
            </p>
          </div>
          <button className={styles.mainForm__send}>Отправить заявку</button>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
