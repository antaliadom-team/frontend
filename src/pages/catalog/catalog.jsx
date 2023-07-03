import styles from "./catalog.module.css";
import { useState } from "react";
import Filters from "./filters/filters";
import { useSelector } from "react-redux";
import Rent from "./categories/rent";
import Buy from "./categories/buy";

const Catalog = () => {
    const screen = useSelector((store) => store.screen);
    const [category, setCategory] = useState("rent");
    const [filteredObj, setFilteredObj] = useState([]);

    const filteredObjects = (obj) => {
        setFilteredObj(obj);
    };

    return (
        <section className={styles.container}>
            {screen.mobile && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <Filters category={category} setCategory={setCategory} filteredObjects={filteredObjects} />
            {!screen.mobile && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <div className={styles.ads}>
                {category === "rent" && <Rent filteredObj={filteredObj} />}
                {category === "buy" && <Buy filteredObj={filteredObj} />}
            </div>
        </section>
    );
};

export default Catalog;
