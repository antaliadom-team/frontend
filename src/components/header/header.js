import styles from "./header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);
  const [aboutTarget, setAboutTarget] = useState(null);
  const [formTarget, setFormTarget] = useState(null);

  useEffect(() => {
    setAboutTarget(document.getElementById("about"));
    setFormTarget(document.getElementById("send"));
  }, [location]);

  const handleClick = event => {
    event.preventDefault();
    if (event.target.href === "http://localhost:3000/#about") {
      aboutTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (event.target.href === "http://localhost:3000/#send") {
      formTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
              <a
                href="#about"
                onClick={handleClick}
                className={styles.link}>
                О нас
              </a>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/catalog"
                className={({ isActive }) => toggleClass(isActive)}>
                Каталог
              </NavLink>
            </li>
            <li className={styles.item}>
              <a
                  href="#send"
                  onClick={handleClick}
                  className={styles.link}>
                Отправить заявку
              </a>
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
