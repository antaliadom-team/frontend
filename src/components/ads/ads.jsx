import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ObjectsContext } from "../../services/app-context";

const Ads = () => {
  const countObjects = 4;
  const { objects } = useContext(ObjectsContext);

  return (
    <section className={styles.ads}>
      <h2 className={styles.ads__title}>Свежие объявления</h2>
      {objects && (
        <>
          <div className={styles.wrapper}>
            {objects.results.slice(0, countObjects).map((object) => (
              <CatalogItem objectInfo={object} key={object.id} />
            ))}
          </div>
          {objects.length > countObjects ? (
            <div className={styles.btn_wrapper}>
              <Link to="/catalog">
                <Button type={"primary"}>Смотреть все</Button>
              </Link>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </section>
  );
};

export default Ads;
