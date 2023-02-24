import styles from "./ads.module.css";
import CatalogItem from "../catalog-item/catalog-item";
import { Button } from "../ui/buttons";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CountObjectsOnMainPageContext, ObjectsContext } from "../../services/app-context";
import { getObjects } from "../../services/api/objects";

const Ads = () => {
  const { countObjects, setCountObjects } = useContext(CountObjectsOnMainPageContext);
  const { objectsFromContext } = useContext(ObjectsContext);
  const [objects, setObjects] = useState(objectsFromContext);

  useEffect(() => {
    getObjects(setObjects);
  }, []);

  function addObjects() {
    setCountObjects(countObjects + 4);
  }

  return (
    <section className={styles.ads}>
      <h2 className={styles.ads__title}>Свежие объявления</h2>
      {objects ? (
        <>
          <div className={styles.wrapper}>
            {objects.slice(0, countObjects).map((object) => (
              <CatalogItem objectInfo={object} key={object.id} />
            ))}
          </div>
          {objects.length > countObjects ? (
            <div className={styles.btn_wrapper}>
              <Button type={"primary"} onClick={addObjects}>
                Смотреть все
              </Button>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}

      {/* <Link to={"/catalog"} className={styles.btn_wrapper}> */}
      {/* </Link> */}
    </section>
  );
};

export default Ads;
