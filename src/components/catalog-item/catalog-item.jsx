import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./catalog-item.module.css";
import { ButtonWithLike } from "../ui/buttons";
import { AuthContext, DataContext, ObjectsContext } from "../../services/app-context";
import noPhoto from "../../images/no-photo.png";
import { addFavourite } from "../../services/api/user";
import {openFavourite} from "../../store/reducers/modal-slice";
import { useDispatch } from "react-redux";

const CatalogItem = ({ withBtn = true, withDesc = true, item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { data } = useContext(DataContext);
    const { isAuth } = useContext(AuthContext);
    const { setObjects } = useContext(ObjectsContext);

    const toggleFavourite = () => {
        if (!isAuth) {
            dispatch(openFavourite());
            return;
        }

        if (item?.is_favorited) {
            dispatch(openFavourite(item));
        } else {
            addFavourite(item.id, setObjects, item.category, isAuth );
        }
    };

    return (
        <div className={styles.wrapper}>
            <div onClick={() => navigate(`/object/${item.id}`)}>
                <img
                    src={item?.images[0]?.image !== undefined ? item.images[0]?.image : noPhoto}
                    alt="фото квартиры"
                    className={styles.image}
                />
                <div className={styles.price}>{`${item?.price}${item?.currency}/${item?.period}`}</div>
                <div className={styles.description_top}>
                    <p className={styles.text}>{item?.category === 1 ? "Аренда" : "Покупка"}</p>
                    <div className={styles.dot} />
                    {data?.types && (
                        <p className={styles.text}>
                            {data.types[item?.property_type - 1]?.name}, {item?.rooms}
                            {item?.rooms === 1 ? " комната" : item?.rooms > 4 ? " комнат" : " комнаты"}
                        </p>
                    )}
                </div>
                <div className={styles.hr} />
                {withDesc && (
                    <div className={styles.description_bottom}>
                        {data.locations && (
                            <p className={styles.text}>
                                {item?.title} {data?.locations[item?.location - 1]?.name}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {withBtn && (
                <div className={styles.button}>
                    <ButtonWithLike
                        onClick={() => navigate(`/order/${item.id}`)}
                        setFavourite={toggleFavourite}
                        favourite={item?.is_favorited}>
                        Оформить заявку
                    </ButtonWithLike>
                </div>
            )}
        </div>
    );
};

export default CatalogItem;
