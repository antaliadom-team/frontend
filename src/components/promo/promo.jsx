import styles from "./promo.module.css";
import promoImage from "../../images/pic_main.png";
import { Button } from "../ui/buttons";
import { Link } from "react-router-dom";

const Promo = () => {
  return (
      <section className={styles.promo}>
        <div className={styles.image}>
          <img src={promoImage} alt="фото квартиры" />
        </div>
        <div className={styles.front}>
          <h1 className={styles.title}>Анталия Дом</h1>
          <p className={styles.subtitle}>
            Поможем найти квартиру на море с легкостью
          </p>
          <Link to={"/catalog"} className={styles.link} >
            <Button type="primary" width={"100%"}>Смотреть каталог</Button>
          </Link>
        </div>
      </section>
  );
};

export default Promo;
