import { useContext } from "react";
import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { ObjectsContext } from "../../services/app-context";

const Catalog = () => {
  const titles = document.getElementsByClassName(styles.filters_title);
  const { data } = useContext(ObjectsContext);
  console.log(data);

  const toggleClass = (event) => {
    for (let title of titles) {
      if (title.classList.contains(styles.active)) title.classList.remove(styles.active);
      event.target.classList.add(styles.active);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.filters} onClick={toggleClass}>
        <div className={`${styles.filters_title} ${styles.active}`}>Аренда</div>
        <div className={styles.filters_title}>Покупка</div>
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
      <div className={styles.ads}>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>
    </section>
  );
};

export default Catalog;
