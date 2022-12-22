import styles from "./main.module.css";
import mainImage from "../../images/pic_main.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.promo}>
        <img className={styles.mainImage} src={mainImage} alt="фото квартиры" />
        <div className={styles.frontBlock}>
          <h3 className={styles.title}>Анталия Дом</h3>
          <p className={styles.subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <button className={styles.button}>Смотреть каталог</button>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.about}>О нас</h3>
            <p className={styles.paragraph_about}>
              Мы поможем вам найти квартиру мечты в Анталье. В нашей базе
              собрано более 200 актуальных объявлений о сдаче и продаже
              недвижимости в Анталье. А если вы не найдете ничего подходящего,
              наш менеджер свяжется с вами и поможет подобрать что-то на ваш
              вкус
            </p>
            <button className={styles.button}>Смотреть каталог</button>
          </div>
          <div className={styles.column}></div>
        </div>
      </section>
    </div>
  );
};

export default Main;
