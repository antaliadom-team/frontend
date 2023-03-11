import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext } from "react";
import { ObjectsContext } from "../../services/app-context";
import { useState } from "react";
import { useEffect } from "react";
import { getObjects } from "../../services/api/objects";

const Catalog = () => {
  const { objects, setObjects } = useContext(ObjectsContext);
  const [rent, setRent] = useState(true);
  const [filterObjects, setFilterObjects] = useState(objects.filter((objects) => objects.category === 1));
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e) => {
    console.log("scrollHeight", e.target.documentElement.scrollHeight);
    console.log("scrollTop", e.target.documentElement.scrollTop);
    console.log("innerHeight", window.innerHeight);
  };

  useEffect(() => {
    getObjects(setObjects);
  }, [fetching]);

  useEffect(() => {
    rent
      ? setFilterObjects(objects.filter((objects) => objects.category === 1))
      : setFilterObjects(objects.filter((objects) => objects.category === 2));
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
