import styles from "../catalog.module.css";
import Card from "../../../components/card/card";
import { useGetNextRentQuery } from "../../../store/objects-api";
import Pagination from "../pagination/pagination";
import { useEffect, useState } from "react";

const Rent = ({ filteredObj }) => {
    const [page, setPage] = useState(1);
    const [countPages, setCountPages] = useState([]);
    const { data: objectsRent, isLoading, isError } = useGetNextRentQuery(page);
    const [objects, setObjects] = useState([]);

    const selectPageProps = (pageSet) => {
        setPage(pageSet);
    };

    useEffect(() => {
        if (objectsRent && !filteredObj.length) {
            setObjects(objectsRent);
        }
        if (filteredObj.length) {
            setObjects({ results: filteredObj });
        }
    }, [objectsRent, filteredObj]);

    useEffect(() => {
        if (objects) {
            const arr = Array.from({ length: Math.floor(objects.count / 8) + 1 }, (_, index) => index + 1);
            setCountPages(arr);
        }
    }, [objects]);

    return (
        <>
            <div className={styles.ads}>
                {isLoading && <h2 className={styles.ads_title}>Идёт загрузка...</h2>}
                {isError && <h2 className={styles.ads_title}>Произошла ошибка при получении данных</h2>}
                {objects?.results && objects?.results?.map((item) => <Card key={item.id} item={item} />)}
            </div>
            {!isLoading && countPages && (
                <Pagination countPages={countPages} selectPageProps={selectPageProps} objects={objects} />
            )}
        </>
    );
};

export default Rent;
