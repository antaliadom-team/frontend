import styles from "./about-us.module.css";
import aboutImage from "../../images/about_main.png";

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutUs__container}>
        <div className={styles.aboutUs__columns}>
          <div className={styles.aboutUs__column}>
            <h2 className={styles.aboutUs__title}>О нас</h2>
            <p className={styles.aboutUs__paragraph}>
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
            <button className={styles.aboutUs__button}>Смотреть каталог</button>
          </div>
          <div className={styles.aboutUs__column}>
            <img
              className={styles.aboutUs__image}
              src={aboutImage}
              alt="фото квартиры"
            />
            <div className={styles.aboutUs__blockUnderImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
