import styles from "./about-us.module.css";
import aboutImageRight from "../../images/about-us-right.png";
import { Button } from "../ui/buttons";
import { useNavigate } from "react-router-dom";

const Mobile = () => {
  const navigate = useNavigate();

  return (
    <article id="about" className={styles.container}>
      <h2 className={styles.aboutUs__title}>О нас</h2>
      <div className={styles.article}>
        <p className={styles.aboutUs__paragraph}>
          <span>Мы знаем</span>, что аренда, покупка или продажа недвижимости
          часто может быть непростым и&nbsp;трудоемким процессом, полным
          неожиданных сюрпризов. От скрытых проблем с квартирами
          до&nbsp;непорядочных брокеров — мы видели и слышали это на
          протяжении многих лет.
        </p>
        <p className={styles.aboutUs__paragraph}>
          Вот почему миссия <span>«АнталияДом»</span> заключается в том, чтобы
          перевернуть типичный опыт работы с&nbsp;недвижимостью, сделав этот
          процесс приятным для&nbsp;наших клиентов. Команда компании состоит
          из&nbsp;реальных людей с реальным опытом, сочетающих в себе
          профессионализм и знание нюансов рынка.
        </p>
      </div>
        <img
          className={styles.aboutUs__image}
          src={aboutImageRight}
          alt="фото квартиры"
        />
      <div className={styles.article_bottom}>
        <p className={styles.aboutUs__paragraph}>
          <span>Мы понимаем,</span> вы принимаете чрезвычайно важное решение
          и&nbsp; вам нужны люди, которым вы можете доверять.
        </p>
        <p
          className={styles.aboutUs__paragraph}>
          <span>Мы поможем</span> вам найти идеальное место и&nbsp;позаботимся о
          том, чтобы вы связали с ним будущее.
        </p>
        <p
          className={styles.aboutUs__paragraph}>
          <span>Мы хотим,</span> чтобы вы любили место, где живете. Это
          желание управляет всем, что мы делаем.
        </p>
      </div>
      <div className={styles.aboutUs__button}>
        <Button type={"primary"} onClick={() => navigate("/catalog")}>Смотреть каталог</Button>
      </div>
    </article>
  );
};

export default Mobile;