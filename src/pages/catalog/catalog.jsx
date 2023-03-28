import styles from "./catalog.module.css";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext, useEffect, useState } from "react";
import { ObjectsContext, ScreenWidthContext, AuthContext } from "../../services/app-context";
import Filters from "./filters";
import { getCatalogObjects } from "../../services/api/objects";

const Catalog = () => {
    const { screenWidth } = useContext(ScreenWidthContext);
    const { isAuth } = useContext(AuthContext);
    const { objects, setObjects } = useContext(ObjectsContext);
    const [category, setCategory] = useState(1);

    useEffect(() => {
        getCatalogObjects(setObjects, category, isAuth);
    }, [category, isAuth]);

    return (
        <section className={styles.container}>
            {screenWidth === "mobile" && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <Filters rent={category} setRent={setCategory} />
            {screenWidth !== "mobile" && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <div className={styles.ads}>
                {objects?.results && objects.results.map((item) => <CatalogItem key={item.id} item={item} />)}
            </div>
        </section>
    );
};

export default Catalog;
