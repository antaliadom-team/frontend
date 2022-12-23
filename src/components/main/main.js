import styles from "./main.module.css";
import promoImage from "../../images/pic_main.png";
import photo_1 from "../../images/photo_1.png";
import photo_2 from "../../images/photo_2.png";
import photo_3 from "../../images/photo_3.png";
import photo_4 from "../../images/photo_4.png";
import aboutImage from "../../images/about_main.png";

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
          <h1 className={styles.title}>Анталия Дом</h1>
          <p className={styles.subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <button className={styles.button}>Смотреть каталог</button>
        </div>
      </section>

      <section className={styles.aboutUs}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h2 className={styles.about}>О нас</h2>
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
              className={styles.aboutImage}
              src={aboutImage}
              alt="фото квартиры"
            />
            <div className={styles.blockUnderImage} />
          </div>
        </div>
      </section>
      <section className={styles.aboutTeam}>
        <h2 className={styles.aboutTeam__title}>Наша команда</h2>
        <ul className={styles.aboutTeam__container}>
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
      </section>
    </div>
  );
};

export default Main;
