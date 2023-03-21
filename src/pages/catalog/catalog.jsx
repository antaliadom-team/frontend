import styles from "./catalog.module.css";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext, useEffect, useState } from "react";
import { ObjectsContext, ScreenWidthContext } from "../../services/app-context";
import { getObjectsPage } from "../../services/api/objects";
import Filters from "./filters";

const Catalog = () => {
    const { screenWidth } = useContext(ScreenWidthContext);
    const { objects, setObjects } = useContext(ObjectsContext);
    const [rent, setRent] = useState(1);
    const [filterObjects, setFilterObjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [fetching, setFetching] = useState(false);
    const [allObjects, setAllObjects] = useState([]);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    };

    useEffect(() => {
        if (fetching && currentPage < Math.floor(objects?.count / 8) + 1) {
            getObjectsPage(setObjects, currentPage).finally(() => setFetching(false));
            setCurrentPage(currentPage + 1);
        }
    }, [fetching]);

    useEffect(() => {
        if (objects?.results) {
            if (allObjects[0]?.id === objects.results[0]?.id) return;
            setAllObjects([...allObjects, ...objects.results]);
        }
    }, [objects]);

    useEffect(() => {
        setFilterObjects(allObjects.filter((objects) => objects.category === rent));
    }, [rent, allObjects]);

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return function () {
            document.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <section className={styles.container}>
            {screenWidth === "mobile" && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <Filters rent={rent} setRent={setRent} />
            {screenWidth !== "mobile" && <h1 className={styles.ads_title}>Свежие объявления</h1>}
            <div className={styles.ads}>
                {filterObjects.map((item) => (
                  <CatalogItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};



export default Catalog;
