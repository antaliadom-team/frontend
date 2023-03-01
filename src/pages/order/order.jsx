import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { Checkbox, PhoneInput, TextareaInput, TextInput } from "../../components/ui/inputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const [orderSent, setOrderSent] = useState(false);

  const renderContent = () => {
    if (orderSent) {
      return (
        <>
          <h1 className={styles.title}>Ваша заявка отправлена!</h1>
          <div className={styles.content}>
            <CatalogItem withBtn={false} />
          </div>
          <div className={styles.button}>
            <Button type={"primary"} width={"100%"} onClick={() => navigate("/")}>
              На главную
            </Button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h1 className={styles.title}>Оформить заявку</h1>
          <h3 className={styles.subtitle}>Вы оформляете заявку на следующий объект </h3>
          <div className={styles.content}>
            <CatalogItem withBtn={false} />
            <form className={styles.form}>
              <TextInput text={"Ваше имя*"} />
              <TextInput text={"Ваша Фамилия*"} />
              <PhoneInput text={"Ваш телефон*"} />
              <TextInput text={"Ваш e-mail*"} />
              <TextareaInput />
            </form>
          </div>
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
          <Button
            type={"primary"}
            width={"100%"}
            onClick={() => {
              setOrderSent(true);
            }}>
            Оформить заявку
          </Button>
        </>
      );
    }
  };

  return (
    <section className={styles.container}>
      <Button type={"text"} onClick={() => navigate("/catalog")}>
        Назад
      </Button>
      {renderContent()}
    </section>
  );
};

export default Order;
