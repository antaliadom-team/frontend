import React, { useEffect, useState } from "react";
import styles from "./navigation.module.css";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);
  const [aboutTarget, setAboutTarget] = useState(null);
  const [formTarget, setFormTarget] = useState(null);

  useEffect(() => {
    setAboutTarget(document.getElementById("about"));
    setFormTarget(document.getElementById("send"));
  }, [location]);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.href === "http://localhost:3000/#about") {
      aboutTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (event.target.href === "http://localhost:3000/#send") {
      formTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

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
            onClick={handleClick}
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
            onClick={handleClick}
            className={styles.link}>
            Отправить заявку
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/sample-product-page"
            className={({ isActive }) => toggleClass(isActive)}>
            Карточка объекта
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
