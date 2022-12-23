import styles from "./main.module.css";
import promoImage from "../../images/pic_main.png";
import photo_1 from "../../images/photo_1.png";
import photo_2 from "../../images/photo_2.png";
import photo_3 from "../../images/photo_3.png";
import photo_4 from "../../images/photo_4.png";
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
      </section>
      <section className={styles.aboutUs}>
        <h2 className={styles.aboutUs__title}>Наша команда</h2>
        <ul className={styles.aboutUs__container}>
          <li className={styles.aboutUs__element}>
            <img src={photo_1} alt="фото команды" />
            <p className={styles.aboutUs__name}>Михаил</p>
            <div className={styles.aboutUs__underline} />
            <p className={styles.aboutUs__number}>+90 (534) 123 45 67</p>
          </li>
          <li className={styles.aboutUs__element}>
            <img src={photo_2} alt="фото команды" />
            <p className={styles.aboutUs__name}>Михаил</p>
            <div className={styles.aboutUs__underline} />
            <p className={styles.aboutUs__number}>+90 (534) 123 45 67</p>
          </li>
          <li className={styles.aboutUs__element}>
            <img src={photo_3} alt="фото команды" />
            <p className={styles.aboutUs__name}>Михаил</p>
            <div className={styles.aboutUs__underline} />
            <p className={styles.aboutUs__number}>+90 (534) 123 45 67</p>
          </li>
          <li className={styles.aboutUs__element}>
            <img src={photo_4} alt="фото команды" />
            <p className={styles.aboutUs__name}>Михаил</p>
            <div className={styles.aboutUs__underline} />
            <p className={styles.aboutUs__number}>+90 (534) 123 45 67</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Main;
