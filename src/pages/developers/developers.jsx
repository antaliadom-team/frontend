import styles from "./developers.module.css";
import tg from "../../images/person_tg.png";
import email from "../../images/person_email.png";
import { developers } from "./data";

const Developers = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Наша команда разработки</h1>
            {developers.map((section, index) => (
                <div key={index}>
                    <h2 className={styles.role_title}>{section.title}</h2>
                    <div className={styles.role}>
                        {section.group.map((person) => (
                            <div className={styles.person} key={Math.floor(Math.random() * 100)}>
                                <div className={styles.photo}>
                                    <img className={styles.photo} src={person.photo} alt="team-member" />
                                </div>
                                <p className={styles.name}>{person.name}</p>
                                <p className={styles.person_role}>{person.role}</p>
                                <div className={styles.line} />
                                <div className={styles.contacts}>
                                    <img src={tg} alt="tg" />
                                    <a href={`https://t.me/${person.tg}`} target="_blank" rel="noreferrer">
                                        {person.tg}
                                    </a>
                                </div>
                                <div className={styles.contacts}>
                                    <img src={email} alt="email" />
                                    <a href={`mailto:${person.email}`}>{person.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Developers;
