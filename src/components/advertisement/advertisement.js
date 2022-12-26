import styles from "./advertisement.module.css";

const Advertisement = () => {
  return (
    <section className={styles.hotAdvertisement}>
      <div className={styles.hotAdvertisement__container}>
        <h2 className={styles.hotAdvertisement__title}>Свежие объявления</h2>
        <ul className={styles.hotAdvertisement__list}>
          <li className={styles.hotAdvertisement__testCard} />
          <li className={styles.hotAdvertisement__testCard} />
          <li className={styles.hotAdvertisement__testCard} />
          <li className={styles.hotAdvertisement__testCard} />
        </ul>
      </div>
      <button className={styles.hotAdvertisement__moreButton}>
        Смотреть все
      </button>
    </section>
  );
};

export default Advertisement;
