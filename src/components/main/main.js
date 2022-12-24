import styles from "./main.module.css";
import promoImage from "../../images/pic_main.png";
import photo_1 from "../../images/photo_1.png";
import photo_2 from "../../images/photo_2.png";
import photo_3 from "../../images/photo_3.png";
import photo_4 from "../../images/photo_4.png";
import aboutImage from "../../images/about_main.png";
import advantage1 from "../../images/advantage1.svg";
import advantage2 from "../../images/advantage2.svg";
import advantage3 from "../../images/advantage3.svg";
import MainForm from "./mainForm/mainForm";

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
      <section className={styles.hotAdvertisement}>
        <div className={styles.hotAdvertisement__container}>
          <h2 className={styles.hotAdvertisement__title}>Свежие объявления</h2>
          <ui className={styles.hotAdvertisement__list}>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
            <li className={styles.hotAdvertisement__testCard}></li>
          </ui>
        </div>
        <button className={styles.hotAdvertisement__moreButton}>
          Смотреть все
        </button>
      </section>
      <MainForm />
    </div>
  );
};

export default Main;
