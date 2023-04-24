import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetBuyQuery } from "../../../store/objects-api";
import Pagination from "../pagination/pagination";

const Buy = () => {
    const { data: objects, isLoading, isError } = useGetBuyQuery();

    return (
        <div className={styles.ads}>
            {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
            {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
            {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
            {/* <Pagination countPages={countPages} /> */}
        </div>
    );
};

export default Buy;
