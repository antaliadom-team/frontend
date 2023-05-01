import { useState } from "react";
import styles from "./pagination.module.css";

const Pagination = ({ countPages, selectPageProps, objects }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const selectPage = (e) => {
        setCurrentPage(Number(e.target.innerText));
        selectPageProps(Number(e.target.innerText));
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        selectPageProps(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        selectPageProps(currentPage - 1);
    };

    // console.log(objects);
    // console.log(objects.previous);

    return (
        <div className={styles.pagination}>
            <div className={styles.container}>
                <button className={styles.arrow} onClick={prevPage} disabled={currentPage === 1}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.375 2.375L5.625 10.8125L14.0625 19.25"
                            stroke={objects.previous ? "#0D1B44" : "#cacaca"}
                            strokeWidth="1.25"
                        />
                    </svg>
                </button>
                {countPages.map((item) => (
                    <span
                        key={item}
                        className={currentPage === item ? `${styles.item} ${styles.item_active}` : styles.item}
                        onClick={selectPage}>
                        {item}
                    </span>
                ))}
                <button className={styles.arrow} onClick={nextPage} disabled={currentPage === countPages.length}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.625 18.625L14.375 10.1875L5.9375 1.75"
                            stroke={objects.next ? "#0D1B44" : "#cacaca"}
                            stroke-width="1.25"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
