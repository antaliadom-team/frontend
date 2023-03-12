import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext } from "react";
import { ObjectsContext } from "../../services/app-context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_OBJECTS } from "../../services/api/api";
import { getObjects } from "../../services/api/objects";

const Catalog = () => {
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
    if (fetching && currentPage < Math.floor(objects.count / 8) + 1) {
      getObjects(setObjects, currentPage).finally(() => setFetching(false));
      setCurrentPage(currentPage + 1);
    }
  }, [fetching]);

  useEffect(() => {
    setAllObjects([...allObjects, ...objects.results]);
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

  function handleSetRent() {
    setRent(1);
  }

  function handleSetBye() {
    setRent(2);
  }

  return (
    <section className={styles.container}>
      <div className={styles.filters}>
        <div
          className={rent === 1 ? `${styles.filters_title} ${styles.active}` : styles.filters_title}
          onClick={handleSetRent}>
          Аренда
        </div>
        <div
          className={rent === 2 ? `${styles.filters_title} ${styles.active}` : styles.filters_title}
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
