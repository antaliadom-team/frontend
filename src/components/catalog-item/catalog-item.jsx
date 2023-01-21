import styles from "./catalog-item.module.css";
import { ButtonWithLike } from "../ui/buttons";
import Slider from "../slider/slider";

const CatalogItem = () => {
  return (
    <div className={styles.wrapper}>
      <Slider />
      <div className={styles.price}>1000€/месяц</div>
      <div className={styles.description}>
        <p className={styles.text}>Аренда</p>
        <div className={styles.dot} />
        <p className={styles.text}>Квартира, 2 комнаты</p>
      </div>
      <div className={styles.hr} />
      <div className={styles.description}>
        <p className={styles.text}>
          Gündoğdu, Göksu Cd., 07060 Kepez/ Antalya, Турция
        </p>
      </div>
      <div className={styles.button}>
        <ButtonWithLike>Оформить заявку</ButtonWithLike>
      </div>
    </div>
  );
};

export default CatalogItem;
