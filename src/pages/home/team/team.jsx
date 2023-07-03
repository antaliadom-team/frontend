import styles from "./team.module.css";
import photo_1 from "../../../images/photo_1.png";
import photo_2 from "../../../images/photo_2.png";
import photo_3 from "../../../images/photo_3.png";
import photo_4 from "../../../images/photo_4.png";
import { useGetTeamQuery } from "../../../store/api";

const Team = () => {
    const { data } = useGetTeamQuery();

    const team = [
        { first_name: "Садык", photo: photo_1, position: "Агент по недвижимости" },
        { first_name: "Ксения", photo: photo_2, position: "Агент по недвижимости" },
        { first_name: "Сержан", photo: photo_3, position: "Агент по недвижимости" },
        { first_name: "Барбара", photo: photo_4, position: "Агент по недвижимости" },
    ];

    return (
        <section className={styles.team}>
            <h2 className={styles.title}>Наша команда</h2>
            <ul className={styles.list}>
                {team.map((e, i) => {
                    return (
                        <li key={i}>
                            <img className={styles.photo} src={e.photo} alt={`фото ${e.first_name}`} />
                            <p className={styles.name}>{e.first_name}</p>
                            <div className={styles.underline} />
                            <p className={styles.pos}>{e.position}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Team;
