import styles from "./developers.module.css";
import tg from "../../images/person_tg.png";
import email from "../../images/person_email.png";
import { des, pm, front, back, qa } from "./data";

const Developers = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Наша команда разработки</h1>
          {[pm, des, front, back, qa].map((group, index) => (
            <div key={index}>
              {index === 0 && (<h2 className={styles.role_title}>Project managers</h2>)}
              {index === 1 && (<h2 className={styles.role_title}>Designers</h2>)}
              {index === 2 && (<h2 className={styles.role_title}>Frontend developers</h2>)}
              {index === 3 && (<h2 className={styles.role_title}>Backend developers</h2>)}
              {index === 4 && (<h2 className={styles.role_title}>QA-engineers</h2>)}
              <div className={styles.role}>
                {group.map(person => (
                    <div className={styles.person} key={Math.floor(Math.random() * 100)}>
                      <div className={styles.photo}>
                        <img className={styles.photo} src={person.photo} alt="photo" />
                      </div>
                      <p className={styles.name}>{person.name}</p>
                      <p className={styles.person_role}>{person.role}</p>
                      <div className={styles.line} />
                      <div className={styles.contacts}>
                        <img src={tg} alt="tg" />
                        <a href={`https://t.me/${person.tg}`} target="_blank" rel="noreferrer">{person.tg}</a>
                      </div>
                      <div className={styles.contacts}>
                        <img src={email} alt="email" />
                        <a href={`mailto:${person.email}`}>{person.email}</a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}

        </section>
    );
};

export default Developers;
