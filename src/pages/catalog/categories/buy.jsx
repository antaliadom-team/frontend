import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetBuyQuery } from "../../../store/objects-api";
import Pagination from "../pagination/pagination";
import { useEffect, useState } from "react";

const Buy = () => {
    const { data: objects, isLoading, isError } = useGetBuyQuery();

    const [countPages, setCountPages] = useState([]);

    useEffect(() => {
        if (objects) {
            const arr = Array.from({ length: Math.floor(objects.count / 8) + 1 }, (_, index) => index + 1);
            setCountPages(arr);
            console.log(arr);
        }
    }, [objects]);

    return (
        <div className={styles.ads}>
            {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
            {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
            {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
            {!isLoading && countPages && <Pagination countPages={countPages} />}
        </div>
    );
};

export default Buy;
