import styles from "../catalog.module.css";

import DesktopFilters from "./desktop-filters";
import MobileFilters from "./mobile-filters";
import { useSelector } from "react-redux";

const Filters = ({ category, setCategory, filteredObjects }) => {
    const screen = useSelector((store) => store.screen);

    return (
        <>
            <div className={styles.category}>
                <div
                    className={
                        category === "rent" ? `${styles.category_title} ${styles.active}` : styles.category_title
                    }
                    onClick={() => setCategory("rent")}>
                    Аренда
                </div>
                <div
                    className={category === "buy" ? `${styles.category_title} ${styles.active}` : styles.category_title}
                    onClick={() => setCategory("buy")}>
                    Покупка
                </div>
            </div>
            {screen.desktop ? (
                <DesktopFilters category={category} filteredObjects={filteredObjects} />
            ) : (
                <MobileFilters category={category} />
            )}
        </>
    );
};

export default Filters;
