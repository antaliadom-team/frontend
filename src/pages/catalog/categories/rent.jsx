import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetNextQuery, useGetRentQuery } from "../../../store/objects-api";
import Pagination from "../pagination/pagination";
import { useEffect, useState } from "react";

const Rent = () => {
    // const { data: objects, isLoading, isError } = useGetRentQuery();

    const [countPages, setCountPages] = useState([]);
    const { data: objects, isLoading, isError } = useGetNextQuery(3);
    console.log(objects);

    useEffect(() => {
        if (objects) {
            const arr = Array.from({ length: Math.floor(objects.count / 8) + 1 }, (_, index) => index + 1);
            setCountPages(arr);
            console.log(arr);
        }
    }, [objects]);

    return (
        <>
            <div className={styles.ads}>
                {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
                {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
                {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
            </div>
            {!isLoading && countPages && <Pagination countPages={countPages} />}
        </>
    );
};

export default Rent;
