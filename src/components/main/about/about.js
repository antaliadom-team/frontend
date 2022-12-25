import styles from "./about.module.css";
import photo_1 from "../../../images/photo_1.png";
import photo_2 from "../../../images/photo_2.png";
import photo_3 from "../../../images/photo_3.png";
import photo_4 from "../../../images/photo_4.png";
import aboutImage from "../../../images/about_main.png";
import advantage1 from "../../../images/advantage1.svg";
import advantage2 from "../../../images/advantage2.svg";
import advantage3 from "../../../images/advantage3.svg";

const About = () => {
  return (
    <>
      <section className={styles.aboutUs}>
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
      </section>
      <section className={styles.aboutTeam}>
        <div className={styles.aboutTeam__container}>
          <h2 className={styles.aboutTeam__title}>Наша команда</h2>
          <ul className={styles.aboutTeam__list}>
            <li className={styles.aboutTeam__element}>
              <img
                className={styles.aboutTeam__photo}
                src={photo_1}
                alt="фото команды"
              />
              <p className={styles.aboutTeam__name}>Михаил</p>
              <div className={styles.aboutTeam__underline} />
              <p className={styles.aboutTeam__number}>+90 (534) 123 45 67</p>
            </li>
            <li className={styles.aboutTeam__element}>
              <img
                className={styles.aboutTeam__photo}
                src={photo_2}
                alt="фото команды"
              />
              <p className={styles.aboutTeam__name}>Михаил</p>
              <div className={styles.aboutTeam__underline} />
              <p className={styles.aboutTeam__number}>+90 (534) 123 45 67</p>
            </li>
            <li className={styles.aboutTeam__element}>
              <img
                className={styles.aboutTeam__photo}
                src={photo_3}
                alt="фото команды"
              />
              <p className={styles.aboutTeam__name}>Михаил</p>
              <div className={styles.aboutTeam__underline} />
              <p className={styles.aboutTeam__number}>+90 (534) 123 45 67</p>
            </li>
            <li className={styles.aboutTeam__element}>
              <img
                className={styles.aboutTeam__photo}
                src={photo_4}
                alt="фото команды"
              />
              <p className={styles.aboutTeam__name}>Михаил</p>
              <div className={styles.aboutTeam__underline} />
              <p className={styles.aboutTeam__number}>+90 (534) 123 45 67</p>
            </li>
          </ul>
        </div>
      </section>
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
    </>
  );
};

export default About;
