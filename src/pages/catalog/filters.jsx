import styles from "./catalog.module.css";

import DesktopFilters from "./desktop-filters";
import MobileFilters from "./mobile-filters";
import { useSelector } from "react-redux";

const Filters = ({rent, setRent}) => {
  const screen = useSelector(store => store.screen);

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
      {screen.desktop ? <DesktopFilters /> : <MobileFilters />}
    </>
  )
};

export default Filters;