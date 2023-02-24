import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ObjectsContext } from "../../services/app-context";
import { getObjects } from "../../services/api/objects";

const Ads = () => {
  //   const { objects } = useContext(ObjectsContext);
  const [objects, setObjects] = useState();

  useEffect(() => {
    getObjects(setObjects);
  }, []);

  return (
    <section className={styles.ads}>
      <h2 className={styles.ads__title}>Свежие объявления</h2>
      <div className={styles.wrapper}>
        {objects ? (
          <>
            {objects.map((object) => (
              <CatalogItem objectInfo={object} key={object.id} />
            ))}
          </>
        ) : (
          <></>
        )}

        {/* <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem /> */}
      </div>

      <Link to={"/catalog"} className={styles.btn_wrapper}>
        <Button type={"primary"}>Смотреть все</Button>
      </Link>
    </section>
  );
};

export default Ads;
