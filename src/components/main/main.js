import styles from "./main.module.css";
import promoImage from "../../images/pic_main.png";
import advantageImage from "../../images/advantage_main.png";

const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.promo}>
        <img
          className={styles.mainImage}
          src={promoImage}
          alt="фото квартиры"
        />
        <div className={styles.frontBlock}>
          <h3 className={styles.title}>Анталия Дом</h3>
          <p className={styles.subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <button className={styles.button}>Смотреть каталог</button>
        </div>
      </section>

      <section className={styles.advantages}>
        <div className={styles.advantages_container}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h3 className={styles.about}>О нас</h3>
              <p className={styles.paragraph_about}>
                Мы поможем вам найти квартиру мечты в Анталье.
                <br />В нашей базе собрано более 200 актуальных
                <br />
                объявлений о сдаче и продаже недвижимости в Анталье.
                <br />А если вы не найдете ничего подходящего, наш
                <br />
                менеджер свяжется с вами и поможет подобрать что-то
                <br />
                на ваш вкус
              </p>
              <button className={styles.button}>Смотреть каталог</button>
            </div>
            <div className={styles.column}>
              <img
                className={styles.advantageImage}
                src={advantageImage}
                alt="фото квартиры"
              />
              <div className={styles.blockUnderImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
