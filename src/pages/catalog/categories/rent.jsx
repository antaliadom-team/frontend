import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetRentQuery } from "../../../store/objects-api";
import { useSelector } from "react-redux";

const Rent = () => {
    const { isAuth } = useSelector(store => store.user);
    const { data: objects, isLoading, isError } = useGetRentQuery(isAuth);

    return (
        <div className={styles.ads}>
            {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
            {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
            {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
        </div>
    );
};

export default Rent;
