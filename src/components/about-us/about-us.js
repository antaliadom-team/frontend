import styles from "./about-us.module.css";
import aboutImage from "../../images/about_main.png";

const AboutUs = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutUs__columns}>
        <div className={styles.aboutUs__column}>
          <h2 className={styles.aboutUs__title}>О нас</h2>
          <p className={styles.aboutUs__paragraph}>
            <span>Мы знаем</span>, что аренда, покупка или продажа недвижимости
            часто может быть непростым и трудоемким процессом, полным
            неожиданных сюрпризов. От скрытых проблем с квартирами до
            непорядочных брокеров — мы видели и слышали это на протяжении многих
            лет.
          </p>
          <button className={styles.aboutUs__button}>Смотреть каталог</button>
        </div>
        <div className={styles.aboutUs__column}>
          <img
            className={styles.aboutUs__image}
            src={aboutImage}
            alt="фото квартиры"
          />
          <div className={styles.aboutUs__border} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
