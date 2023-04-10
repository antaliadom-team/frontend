import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./form";
import OrderSent from "./order-sent";
import { useDispatch, useSelector } from "react-redux";
import { openObject } from "../../store/modal-slice";
import { useGetObjectQuery } from "../../store/objects-api";

const Order = () => {
    const screen = useSelector((store) => store.screen);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [orderSent, setOrderSent] = useState(false);
    const { data: item } = useGetObjectQuery(id);

    useEffect(() => {
        if (orderSent && screen.desktop) {
            dispatch(openObject());
        }
    }, [orderSent]);

    return (
        <section className={styles.container}>
            {orderSent && !screen.desktop ? (
                <OrderSent item={item} />
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
                            <Card withBtn={false} item={item} />
                        </div>
                    </div>
                    <Form setOrderSent={setOrderSent} />
                </>
            )}
        </section>
    );
};

export default Order;
