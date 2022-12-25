import styles from "./about-team.module.css";
import photo_1 from "../../images/photo_1.png";
import photo_2 from "../../images/photo_2.png";
import photo_3 from "../../images/photo_3.png";
import photo_4 from "../../images/photo_4.png";

const AboutTeam = () => {
  return (
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
  );
};

export default AboutTeam;
