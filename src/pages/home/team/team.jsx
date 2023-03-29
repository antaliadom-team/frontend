import styles from "./team.module.css";
import photo_1 from "../../../images/photo_1.png";
import photo_2 from "../../../images/photo_2.png";
import photo_3 from "../../../images/photo_3.png";
import photo_4 from "../../../images/photo_4.png";

const Team = () => {
  const team = [
    { name: "Садык", photo: photo_1, pos: "Агент по недвижимости" },
    { name: "Ксения", photo: photo_2, pos: "Агент по недвижимости" },
    { name: "Сержан", photo: photo_3, pos: "Агент по недвижимости" },
    { name: "Барбара", photo: photo_4, pos: "Агент по недвижимости" },
  ];

  return (
    <section className={styles.team}>
      <h2 className={styles.title}>Наша команда</h2>
      <ul className={styles.list}>
        {team.map((e, i) => {
          return (
            <li key={i}>
              <img className={styles.photo} src={e.photo} alt="фото команды" />
              <p className={styles.name}>{e.name}</p>
              <div className={styles.underline} />
              <p className={styles.pos}>{e.pos}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Team;
