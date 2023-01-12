import styles from "./header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt={"логотип"} />
        </NavLink>
        <Navigation />
        <button className={styles.button}>Вход</button>
      </header>
    </div>
  );
};

export default Header;
