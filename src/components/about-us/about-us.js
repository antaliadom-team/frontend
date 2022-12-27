import styles from "./about-us.module.css";
import aboutImageRight from "../../images/about-us-right.png";
import aboutImageLeft from "../../images/about-us-left.png";

const AboutUs = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.aboutUs__columns}>
        <div className={styles.aboutUs__column}>
          <h2 className={styles.aboutUs__title}>О нас</h2>
          <p className={styles.aboutUs__paragraph}>
            <span>Мы знаем</span>, что аренда, покупка или продажа недвижимости
            часто может быть непростым
          </p>
          <p className={styles.aboutUs__paragraph}>
            и трудоемким процессом, полным неожиданных сюрпризов. От скрытых
            проблем с квартирами
          </p>
          <p className={styles.aboutUs__paragraph}>
            до непорядочных брокеров — мы видели и слышали это на протяжении
            многих лет.
          </p>
          <p className={styles.aboutUs__paragraph}>
            Вот почему миссия <span>«АнталияДом»</span> заключается в том, чтобы
            перевернуть типичный опыт работы
          </p>
          <p className={styles.aboutUs__paragraph}>
            с недвижимостью, сделав этот процесс приятным
          </p>
          <p className={styles.aboutUs__paragraph}>
            для наших клиентов. Команда компании состоит
          </p>
          <p className={styles.aboutUs__paragraph}>
            из реальных людей с реальным опытом, сочетающих в себе
            профессионализм и знание нюансов рынка.
          </p>
        </div>
        <div className={styles.aboutUs__column}>
          <img
            className={styles.aboutUs__image}
            src={aboutImageRight}
            alt="фото квартиры"
          />
          <div className={styles.aboutUs__border} />
        </div>
      </div>
      <div className={styles.aboutUs__columns}>
        <div className={styles.aboutUs__column}>
          <img
            className={styles.aboutUs__image}
            src={aboutImageLeft}
            alt="фото квартиры"
          />
          <div
            className={`${styles.aboutUs__border} ${styles.aboutUs__border_bottom}`}
          />
        </div>
        <div
          className={`${styles.aboutUs__column} ${styles.aboutUs__column_bottom}`}>
          <p className={styles.aboutUs__paragraph}>
            <span>Мы понимаем,</span> вы принимаете чрезвычайно важное решение и
            вам нужны люди, которым
          </p>
          <p
            className={`${styles.aboutUs__paragraph} ${styles.aboutUs__paragraph_bottom}`}>
            вы можете доверять.
          </p>
          <p
            className={`${styles.aboutUs__paragraph} ${styles.aboutUs__paragraph_bottom}`}>
            <span>Мы поможем</span> вам найти идеальное место
          </p>
          <p
            className={`${styles.aboutUs__paragraph} ${styles.aboutUs__paragraph_bottom}`}>
            и позаботимся о том, чтобы вы связали с ним будущее.
          </p>
          <p
            className={`${styles.aboutUs__paragraph} ${styles.aboutUs__paragraph_bottom}`}>
            <span>Мы хотим,</span> чтобы вы любили место, где живете. Это
            желание управляет всем, что мы делаем.
          </p>
          <button className={styles.aboutUs__button}>Смотреть каталог</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
