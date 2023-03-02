import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { Checkbox, PhoneInput, TextareaInput, TextInput } from "../../components/ui/inputs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../services/app-context";

const Order = () => {
  const navigate = useNavigate();
  const { modal, setModal } = useContext(ModalContext);

  const submitForm = (e) => {
    e.preventDefault();
    setModal({...modal, object: true });
  }

  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <Button type={"text"} onClick={() => navigate("/catalog")}>
          Назад
        </Button>
      </div>
      <h1 className={styles.title}>Оформить заявку</h1>
      <h3 className={styles.subtitle}>Вы оформляете заявку на следующий объект </h3>
      <div className={styles.content}>
        <div className={styles.item}>
          <CatalogItem withBtn={false} />
        </div>

        <form className={styles.form} onSubmit={submitForm}>
          <TextInput text={"Ваше имя*"} />
          <TextInput text={"Ваша Фамилия*"} />
          <PhoneInput text={"Ваш телефон*"} />
          <TextInput text={"Ваш e-mail*"} />
          <TextareaInput />

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
        <Button
          type={"primary"}
          width={"100%"}
          onClick={() => {
            console.log(1);
          }}>
          Оформить заявку
        </Button>
      </div>
        </form>
      </div>
    </section>
  );
};

export default Order;
