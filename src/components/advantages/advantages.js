import styles from "./advantages.module.css";
import advantage1 from "../../images/advantage1.svg";
import advantage2 from "../../images/advantage2.svg";
import advantage3 from "../../images/advantage3.svg";

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantages__title}>Наши преимущества</h2>
      <div className={styles.advantages__container}>
        <div className={styles.advantages__item}>
          <img
            className={styles.advantages__image}
            src={advantage1}
            alt="картинка преимущества команды"
          />
          <div className={styles.advantages__line1} />
        </div>
        <div className={styles.advantages__item}>
          <img
            className={styles.advantages__image}
            src={advantage2}
            alt="картинка преимущества команды"
          />
          <div className={styles.advantages__line2} />
        </div>
        <div className={styles.advantages__item}>
          <img
            className={styles.advantages__image}
            src={advantage3}
            alt="картинка преимущества команды"
          />
          <div className={styles.advantages__line3} />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
