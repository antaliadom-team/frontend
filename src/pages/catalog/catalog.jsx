import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext } from "react";
import { ObjectsContext, ObjectsNextContext } from "../../services/app-context";
import { useState } from "react";
import { useEffect } from "react";
import { getObjectsNext } from "../../services/api/objects";

const Catalog = () => {
  const { objects } = useContext(ObjectsContext);
  const { objectsNext, setObjectsNext } = useContext(ObjectsNextContext);
  const [rent, setRent] = useState(true);
  const [filterObjects, setFilterObjects] = useState(objects.results.filter((objects) => objects.category === 1));
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (fetching && currentPage < objects.count) {
      getObjectsNext(setObjectsNext, currentPage, fetching, setFetching);
      setCurrentPage(currentPage + 1);
      //   setFetching(false);
      //   objects.push(objectsNext);
      console.log(objectsNext);
    }
  }, [fetching]);

  useEffect(() => {
    rent
      ? setFilterObjects(objects.results.filter((objects) => objects.category === 1))
      : setFilterObjects(objects.results.filter((objects) => objects.category === 2));
  }, [rent]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  function handleSetRent() {
    setRent(true);
  }

  function handleSetBye() {
    setRent(false);
  }

  return (
    <section className={styles.container}>
      <div className={styles.filters}>
        <div
          className={rent ? `${styles.filters_title} ${styles.active}` : styles.filters_title}
          onClick={handleSetRent}>
          Аренда
        </div>
        <div
          className={!rent ? `${styles.filters_title} ${styles.active}` : styles.filters_title}
          onClick={handleSetBye}>
          Покупка
        </div>
      </div>
      <div className={styles.dropdowns}>
        <Dropdown placeholder={"Локация"} width={"210px"} options={["Анталия", "Северный Кипр", "Стамбул", "Другое"]} />
        <Dropdown
          placeholder={"Тип недвижимости"}
          width={"300px"}
          options={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]}
        />
        <Dropdown placeholder={"Количество комнат"} width={"300px"} options={["1", "2", "3", "4+"]} />
      </div>

      <h1 className={styles.ads_title}>Свежие объявления</h1>
      {objects && (
        <div className={styles.ads}>
          {filterObjects.map((object) => (
            <CatalogItem objectInfo={object} key={object.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Catalog;
