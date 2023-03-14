import styles from "./navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={({ isActive }) => toggleClass(isActive)}>
            Главная
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/#about"
            className={styles.link}>
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
            to="/#send"
            className={styles.link}>
            Отправить заявку
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
