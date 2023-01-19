import React from "react";
import styles from "./catalog-item.module.css";
// import image from "../../images/catalog-img.png";
// import arrow from "../../images/arrow.svg";
import { ButtonWithLike } from "../ui/buttons";
// import button from "../ui/buttons/button/button";
import Slider from "../slider/slider";

const CatalogItem = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.slider}>
        <img src={image} alt="картинка каталога" className={image} />
        <button className={styles.arrow_left}>
          <img src={arrow} alt={"стрелка"} className={styles.arrow_img} />
        </button>
        <button className={styles.arrow_right}>
          <img src={arrow} alt={"стрелка"} className={styles.arrow_img} />
        </button>
        <div className={styles.pagination}>
          <div
            className={`${styles.pagination_item} ${styles.pagination_active}`}
          />
          <div className={styles.pagination_item} />
          <div className={styles.pagination_item} />
          <div className={styles.pagination_item} />
        </div>
      </div> */}
      <Slider />
      <div className={styles.price}>1000€/месяц</div>
      <div className={styles.description}>
        <p className={styles.text}>Аренда</p>
        <div className={styles.dot} />
        <p className={styles.text}>Квартира, 2 комнаты</p>
      </div>
      <div className={styles.hr} />
      <div className={styles.description}>
        <p className={styles.text}>
          Gündoğdu, Göksu Cd., 07060 Kepez/ Antalya, Турция
        </p>
      </div>
      <div className={styles.button}>
        <ButtonWithLike>Оформить заявку</ButtonWithLike>
      </div>
    </div>
  );
};

export default CatalogItem;
