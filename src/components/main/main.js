import styles from "./main.module.css";
import promoImage from "../../images/pic_main.png";

import MainForm from "./main-form/main-form";
import About from "./about/about";

const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.promo}>
        <img
          className={styles.promo__mainImage}
          src={promoImage}
          alt="фото квартиры"
        />
        <div className={styles.promo__frontBlock}>
          <h1 className={styles.promo__title}>Анталия Дом</h1>
          <p className={styles.promo__subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <button className={styles.promo__button}>Смотреть каталог</button>
        </div>
      </section>
      <About />
      <section className={styles.hotAdvertisement}>
        <div className={styles.hotAdvertisement__container}>
          <h2 className={styles.hotAdvertisement__title}>Свежие объявления</h2>
          <ui className={styles.hotAdvertisement__list}>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
          </ui>
        </div>
        <button className={styles.hotAdvertisement__moreButton}>
          Смотреть все
        </button>
      </section>
      <MainForm />
    </div>
  );
};

export default Main;
