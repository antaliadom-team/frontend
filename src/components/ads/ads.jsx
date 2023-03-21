import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { useNavigate } from "react-router-dom";

const Ads = () => {
  // фикс компонента для свежих объявлений на главной странице
  const navigate = useNavigate();

  return (
    <section className={styles.ads}>
      <h2 className={styles.title}>Свежие объявления</h2>
      <div className={styles.wrapper}>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>

      <div className={styles.button}>
        <Button type={"primary"} width={"100%"} onClick={() => navigate("/catalog")}>Смотреть все</Button>
      </div>
    </section>
  );
};

export default Ads;
