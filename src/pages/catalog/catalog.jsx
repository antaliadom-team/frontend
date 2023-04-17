import styles from "./catalog.module.css";
import { useState } from "react";
import Filters from "./filters/filters";
import { useSelector } from "react-redux";
import Rent from "./categories/rent";
import Buy from "./categories/buy";

const Catalog = () => {
    const screen = useSelector((store) => store.screen);
    const [category, setCategory] = useState("rent");

    return (
        <section className={styles.container}>
            {screen.mobile && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <Filters category={category} setCategory={setCategory} />
            {!screen.mobile && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <div className={styles.ads}>
                {category === "rent" && <Rent />}
                {category === "buy" && <Buy />}
            </div>
        </section>
    );
};

export default Catalog;
