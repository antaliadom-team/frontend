import styles from "./catalog.module.css";
import filter from "../../images/filter.svg";
import { Button, FilterTag, Tag } from "../../components/ui/buttons";
import { useContext, useState } from "react";
import { DataContext, ScreenWidthContext } from "../../services/app-context";

const MobileFilters = () => {
  const { screenWidth } = useContext(ScreenWidthContext);
  const [modal, setModal] = useState(false);
  const { data } = useContext(DataContext);

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
            <Tag selectors={data?.locations} text={"Локация"} />
            <Tag selectors={data?.types} text={"Тип недвижимости"} />
            <Tag selectors={["1", "2", "3", "4+"]} text={"Количество комнат"} />
            <Tag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
            <Button type={"primary"} width={"100%"} padding={"12px 0"}>Показать результаты</Button>
          </>)}
          {screenWidth === "mobile" && (<>
            <FilterTag selectors={data?.locations} text={"Локация"} />
            <FilterTag selectors={data?.types} text={"Тип недвижимости"} />
            <FilterTag selectors={["1", "2", "3", "4+"]} width={"59px"} text={"Количество комнат"} />
            <FilterTag selectors={["Новостройка", "Вторичное"]} text={"Статус"} />
            <Button type={"primary"} width={"100%"} padding={"12px 0"}>Показать результаты</Button>
          </>)}
        </div>
      )}
    </div>
  );
};

export default MobileFilters;