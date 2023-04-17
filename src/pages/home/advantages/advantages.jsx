import styles from "./advantages.module.css";
import advantage1 from "../../../images/advantage1.svg";
import advantage2 from "../../../images/briefcase1.svg";
import advantage3 from "../../../images/advantage3.svg";

const Advantages = () => {
    return (
        <section className={styles.advantages}>
            <h2 className={styles.title}>Наши преимущества</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.image} src={advantage1} alt="картинка преимущества команды" />
                    <p className={styles.text}>Мы работаем быстро. Возможность показа объекта в день заявки</p>
                    <div className={styles.line1} />
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={advantage2} alt="картинка преимущества команды" />
                    <p className={styles.text}>
                        Универсальность.
                        <br />
                        Полный комплекс
                        <br />
                        риэлторских услуг.
                    </p>
                    <div className={styles.line2} />
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={advantage3} alt="картинка преимущества команды" />
                    <p className={styles.text}>
                        Честность.
                        <br />
                        Мы работаем только
                        <br />
                        по договору.
                    </p>
                    <div className={styles.line3} />
                </div>
            </div>
        </section>
    );
};

export default Advantages;
