import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <section className={styles.ads}>
      <h2 className={styles.ads__title}>Свежие объявления</h2>
      <div className={styles.wrapper}>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>

      <Link to={"/catalog"} className={styles.btn_wrapper}>
        <Button type={"primary"}>Смотреть все</Button>
      </Link>
    </section>
  );
};

export default Ads;
