import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { Checkbox, PhoneInput, TextareaInput, TextInput } from "../../components/ui/inputs";
import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { ModalContext, ScreenWidthContext } from "../../services/app-context";
import OrderSent from "./order-sent";
import Policy from "../../components/policy/policy";

const Order = () => {
  const navigate = useNavigate();
  const { modal, setModal } = useContext(ModalContext);
  const { screenWidth } = useContext(ScreenWidthContext);
  const [orderSent, setOrderSent] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (screenWidth === "desktop") {
      setModal({ ...modal, object: true });
    } else {
      setOrderSent(true)
    }
  };

  return (
    <section className={styles.container}>
      {orderSent ? (
        <OrderSent />
      ) : (
        <>
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
                  <Policy/>
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
        </>
      )}
    </section>
  );
};

export default Order;
