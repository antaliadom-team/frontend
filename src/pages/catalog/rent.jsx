import styles from "./catalog.module.css";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useGetRentQuery } from "../../store/api-slice";
import { useContext } from "react";
import { AuthContext } from "../../services/app-context";

const Rent = () => {
    const { isAuth } = useContext(AuthContext);
    const { data: objects, isLoading, isError } = useGetRentQuery(isAuth);

    return (
        <div className={styles.ads}>
            {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
            {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
            {objects?.results && objects?.results?.map((item) => <CatalogItem key={item.id} item={item} />)}
        </div>
    );
};

export default Rent;
