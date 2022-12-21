import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

const Header = () => {
  const toggleClass = (isActive) => (isActive ? styles.active : styles.link);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} className={styles.image} alt="logo" />
          React v18.2.0
        </NavLink>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <NavLink
                to="/"
                className={({ isActive }) => toggleClass(isActive)}>
                Home
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/catalog"
                className={({ isActive }) => toggleClass(isActive)}>
                Catalog
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/profile"
                className={({ isActive }) => toggleClass(isActive)}>
                Profile
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to="/about"
                className={({ isActive }) => toggleClass(isActive)}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={styles.button}>LogIn</button>
      </header>
    </div>
  );
};

export default Header;
