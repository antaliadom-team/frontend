import styles from "./order.module.css";
import { Button } from "../../components/ui/buttons";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ItemContext } from "../../services/app-context";
import { getObject } from "../../services/api/objects";
import Form from "./form";
import OrderSent from "./order-sent";
import { useDispatch, useSelector } from "react-redux";
import { openObject } from "../../store/reducers/modal-slice";

const Order = () => {
    const screen = useSelector(store => store.screen);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { item, setItem } = useContext(ItemContext);
    const [orderSent, setOrderSent] = useState(false);

    useEffect(() => {
        getObject(id, setItem);
    }, [id, setItem]);

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
                            <CatalogItem withBtn={false} item={item} />
                        </div>
                    </div>
                    <Form setSuccess={setOrderSent} id={id} />
                </>
            )}
        </section>
    );
};

export default Order;
