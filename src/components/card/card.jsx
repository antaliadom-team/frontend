import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";
import { ButtonWithLike } from "../ui/buttons";
import noPhoto from "../../images/no-photo.png";
import { openFavourite } from "../../store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { useAddFavouriteMutation, useGetLocationsQuery, useGetTypesQuery } from "../../store/objects-api";

const Card = ({ withBtn = true, withDesc = true, item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isAuth } = useSelector((store) => store.user);
    const { data: locations } = useGetLocationsQuery();
    const { data: types } = useGetTypesQuery();
    const [addFavourite] = useAddFavouriteMutation();

    const setFavourite = () => {
        if (!isAuth) {
            dispatch(openFavourite());
            return;
        }

        if (item?.is_favorited) {
            dispatch(openFavourite(item));
        } else {
            addFavourite(item.id);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.image}>
                    <img
                        src={item?.images[0]?.image !== undefined ? item.images[0]?.image : noPhoto}
                        alt="Фото квартиры"
                        className={styles.image}
                        onClick={() => navigate(`/object/${item.id}`)}
                    />
                </div>
                <div className={styles.price}>{`${item?.price}${item?.currency}${
                    item?.period ? "/" + item.period : ""
                }`}</div>
                <div className={styles.description_top}>
                    <p className={styles.text}>{item?.category === 1 ? "Аренда" : "Покупка"}</p>
                    <div className={styles.dot} />
                    {types && (
                        <p className={styles.text}>
                            {types[item?.property_type - 1]?.name}, {item?.rooms}
                            {item?.rooms === 1 ? " комната" : item?.rooms > 4 ? " комнат" : " комнаты"}
                        </p>
                    )}
                </div>
                <div className={styles.hr} />
                {withDesc && (
                    <div className={styles.description_bottom}>
                        {locations && (
                            <p className={styles.text}>
                                {item?.title} {locations[item?.location - 1]?.name}
                            </p>
                        )}
                    </div>
                )}
            </div>

            {withBtn && (
                <div className={styles.button}>
                    <ButtonWithLike
                        onClick={() => navigate(`/order/${item.id}`)}
                        setFavourite={setFavourite}
                        favourite={item?.is_favorited}>
                        Оформить заявку
                    </ButtonWithLike>
                </div>
            )}
        </div>
    );
};

export default Card;
