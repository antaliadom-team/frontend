import styles from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          ЛОГО
        </NavLink>
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
                to="/sample-product-page"
                className={({ isActive }) => toggleClass(isActive)}>
                Product-Page
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>Вход</button>
      </header>
    </div>
  );
};

export default Header;
