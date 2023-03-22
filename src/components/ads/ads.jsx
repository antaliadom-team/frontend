import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ObjectsContext } from "../../services/app-context";

const Ads = () => {
  const navigate = useNavigate();
  const { objects } = useContext(ObjectsContext);

  return (
    <section className={styles.ads}>
      <h2 className={styles.title}>Свежие объявления</h2>
      <div className={styles.wrapper}>
        {objects?.results ? objects?.results.map((item, index) => {
          if (index > 3) return null;
          return <CatalogItem key={item.id} item={item} />
        }) : (<h2 className={styles.title}>Здесь пока пусто</h2>)}
      </div>

      <div className={styles.button}>
        <Button type={"primary"} width={"100%"} onClick={() => navigate("/catalog")}>Смотреть все</Button>
      </div>
    </section>
  );
};

export default Ads;
