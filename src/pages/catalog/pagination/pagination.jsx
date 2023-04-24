import { useState } from "react";
import styles from "./pagination.module.css";
import left from "../../../images/pagination/left.svg";
import right from "../../../images/pagination/right.svg";

const Pagination = ({ countPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const selectPage = (e) => {
        setCurrentPage(Number(e.target.innerText));
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={styles.container}>
            <button className={styles.arrow} onClick={prevPage} disabled={currentPage === 1}>
                <img src={left} alt="кнопка назад" className={styles.arrow_inactive} />
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
                <img src={right} alt="кнопка вперед" className={styles.arrow_inactive} />
            </button>
        </div>
    );
};

export default Pagination;
