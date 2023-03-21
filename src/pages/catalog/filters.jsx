import styles from "./catalog.module.css";
import { useContext } from "react";
import { ScreenWidthContext } from "../../services/app-context";
import DesktopFilters from "./desktop-filters";
import MobileFilters from "./mobile-filters";

const Filters = ({rent, setRent}) => {
  const { screenWidth } = useContext(ScreenWidthContext);

  return (
    <>
      <div className={styles.category}>
        <div
          className={rent === 1 ? `${styles.category_title} ${styles.active}` : styles.category_title}
          onClick={() => setRent(1)}>
          Аренда
        </div>
        <div
          className={rent === 2 ? `${styles.category_title} ${styles.active}` : styles.category_title}
          onClick={() => setRent(2)}>
          Покупка
        </div>
      </div>
      {screenWidth === "desktop" ? <DesktopFilters /> : <MobileFilters />}
    </>
  )
};

export default Filters;