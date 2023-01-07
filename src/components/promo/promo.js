import styles from "./promo.module.css";
import promoImage from "../../images/pic_main.png";
import { Button } from "../ui/buttons";

const Promo = () => {
  return (
      <section className={styles.promo}>
        <div className={styles.promo__mainImage}>
          <img src={promoImage} alt="фото квартиры" />
        </div>
        <div className={styles.promo__frontBlock}>
          <h1 className={styles.promo__title}>Анталия Дом</h1>
          <p className={styles.promo__subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <Button type="primary">Смотреть каталог</Button>
        </div>
      </section>
  );
};

export default Promo;
