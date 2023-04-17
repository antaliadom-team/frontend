import styles from "./about.module.css";
import Mobile from "./mobile";
import aboutImageRight from "../../../images/about-us-right.png";
import aboutImageLeft from "../../../images/about-us-left.png";
import { PrimaryButton } from "../../../components/ui/buttons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const About = () => {
    const screen = useSelector((store) => store.screen);

    if (!screen.desktop) {
        return <Mobile />;
    }

    return (
        <section id="about" className={styles.container}>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <h2 className={styles.title}>О нас</h2>
                    <p className={styles.paragraph}>
                        <span>Мы знаем</span>, что аренда, покупка или продажа недвижимости часто может быть непростым
                        и&nbsp;трудоемким процессом, полным неожиданных сюрпризов. От скрытых проблем с квартирами
                        до&nbsp;непорядочных брокеров — мы видели и слышали это на протяжении многих лет.
                    </p>
                    <p className={styles.paragraph}>
                        Вот почему миссия <span>«АнталияДом»</span> заключается в том, чтобы перевернуть типичный опыт
                        работы с&nbsp;недвижимостью, сделав этот процесс приятным для&nbsp;наших клиентов. Команда
                        компании состоит из&nbsp;реальных людей с реальным опытом, сочетающих в себе профессионализм и
                        знание нюансов рынка.
                    </p>
                </div>
                <div className={styles.column}>
                    <img className={styles.image} src={aboutImageRight} alt="фото квартиры" />
                    <div className={styles.border} />
                </div>
            </div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <img className={styles.image} src={aboutImageLeft} alt="фото квартиры" />
                    <div className={`${styles.border} ${styles.border_bottom}`} />
                </div>
                <div className={`${styles.column} ${styles.column_bottom}`}>
                    <p className={styles.paragraph}>
                        <span>Мы понимаем,</span> вы принимаете чрезвычайно важное решение и&nbsp; вам нужны люди,
                        которым вы можете доверять.
                    </p>
                    <p className={styles.paragraph}>
                        <span>Мы поможем</span> вам найти идеальное место и&nbsp;позаботимся о том, чтобы вы связали с
                        ним будущее.
                    </p>
                    <p className={styles.paragraph}>
                        <span>Мы хотим,</span> чтобы вы любили место, где живете. Это желание управляет всем, что мы
                        делаем.
                    </p>
                    <Link to={"/catalog"} className={styles.link}>
                        <PrimaryButton>Смотреть каталог</PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
