import styles from "./header.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";
import { Button } from "../ui/buttons";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt={"логотип"} />
        </NavLink>
        <Navigation />
        <Link to={"/auth"} className={styles.button}>
          <Button type={"ghost"}>Вход</Button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
