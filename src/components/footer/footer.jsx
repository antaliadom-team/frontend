import React from "react";
import styles from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { Vkontakte, Telegram, Instagram } from "../ui/icons";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";

const Footer = () => {
  //Добавить политику
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo_link}>
            <img src={logo} alt={"логотип"} className={styles.logo}/>
          </NavLink>
        </div>
        <div className={styles.row}>
          <p className={styles.description}>
            Сервис для аренды и&nbsp;покупки недвижимости в&nbsp;Анталье
          </p>
          <Navigation />
          <div className={styles.social}>
            <Vkontakte />
            <Instagram />
            <Telegram />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
