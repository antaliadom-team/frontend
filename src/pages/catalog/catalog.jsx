import styles from "./catalog.module.css";
import Dropdown from "../../components/ui/buttons/dropdown/dropdown";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { useContext, useState } from "react";
import { ScreenWidthContext } from "../../services/app-context";
import filter from "../../images/filter.svg";
import { Button, FilterTag, Tag } from "../../components/ui/buttons";

const Catalog = () => {
  const { screenWidth } = useContext(ScreenWidthContext);
  const [modal, setModal] = useState(false);

  const toggleClass = (e) => {
    const target = e.target;
    if (!target.classList.contains(styles.category_title)) return;
    const options = document.querySelectorAll("#category");
    Array.from(options).map((element) => element.classList.remove(styles.active));
    e.target.classList.add(styles.active);
  };

  const renderFilter = () => {
    if (screenWidth === "desktop") {
      return (
        <div className={styles.dropdowns}>
          <Dropdown
            placeholder={"Локация"}
            width={"210px"}
            options={["Анталия", "Сев. Кипр", "Стамбул", "Другое"]}
          />
          <Dropdown
            placeholder={"Тип недвижимости"}
            width={"300px"}
            options={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]}
          />
          <Dropdown placeholder={"Количество комнат"} width={"300px"} options={["1", "2", "3", "4+"]} />
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <div className={styles.filters} onClick={() => setModal(true)}>
            <img src={filter} alt="фильтр" />
            <span className={styles.filters_text}>Фильтры</span>
          </div>
          {modal && (
            <div className={styles.filters_modal}>
              <div className={styles.cancel} onClick={() => setModal(false)}>
                Отменить
                <span className={styles.cross} />
              </div>
              {screenWidth === "tablet" && (<>
                <Tag selectors={["Анталия", "Стамбул", "Сев. кипр", "другое"]} text={"Локация"} />
                <Tag selectors={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]} text={"Тип недвижимости"} />
                <Tag selectors={["1", "2", "3", "4+"]} text={"Количество комнат"} />
                <Tag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
                <Button type={"primary"} width={"100%"} padding={"12px 0"}>Показать результаты</Button>
              </>)}
              {screenWidth === "mobile" && (<>
                <FilterTag selectors={["Анталия", "Стамбул", "Сев. кипр", "другое"]} text={"Локация"} />
                <FilterTag selectors={["Вилла", "Дом", "Участок", "Апартаменты", "Комната"]} text={"Тип недвижимости"} />
                <FilterTag selectors={["1", "2", "3", "4+"]} width={"59px"} text={"Количество комнат"} />
                <FilterTag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
                <Button type={"primary"} width={"100%"} padding={"12px 0"}>Показать результаты</Button>
              </>)}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <section className={styles.container}>
      {screenWidth === "mobile" &&  (<h1 className={styles.ads_title}>Свежие объявления</h1>)}
      <div className={styles.category} onClick={toggleClass}>
        <div className={`${styles.category_title} ${styles.active}`} id={"category"}>
          Аренда
        </div>
        <div className={styles.category_title} id={"category"}>
          Покупка
        </div>
      </div>

      {renderFilter()}

      {screenWidth !== "mobile" &&  (<h1 className={styles.ads_title}>Свежие объявления</h1>)}
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
