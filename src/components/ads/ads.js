import styles from "./ads.module.css";

const Ads = () => {
  return (
    <section className={styles.ads}>
        <h2 className={styles.ads__title}>Свежие объявления</h2>
        <ul className={styles.ads__list}>
          <li className={styles.ads__testCard} />
          <li className={styles.ads__testCard} />
          <li className={styles.ads__testCard} />
          <li className={styles.ads__testCard} />
        </ul>
      <button className={styles.ads__moreButton}>
        Смотреть все
      </button>
    </section>
  );
};

export default Ads;
