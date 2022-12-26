import React from "react";
import styles from "../footer/footer.module.css";
import { NavLink } from "react-router-dom";
import { Vkontakte, Telegram, Instagram } from "../ui/icons"

const Footer = () => {
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <NavLink to="/" className={styles.logo_link}>
            ЛОГО
          </NavLink>
        </div>
        <div className={styles.row}>
          <p className={styles.description}>
            Сервис для аренды
            и покупки недвижимости в Анталье
          </p>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <NavLink
                    to="/"
                    className={({ isActive }) => toggleClass(isActive)}>
                  Главная
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                    to="/about"
                    className={({ isActive }) => toggleClass(isActive)}>
                  О нас
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                    to="/catalog"
                    className={({ isActive }) => toggleClass(isActive)}>
                  Каталог
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                    to="/send"
                    className={({ isActive }) => toggleClass(isActive)}>
                  Отправить заявку
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                    to="/contacts"
                    className={({ isActive }) => toggleClass(isActive)}>
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
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
