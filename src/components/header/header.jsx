import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../navigation/navigation";
import { Button } from "../ui/buttons";
import { useContext } from "react";
import { AuthContext, UserContext } from "../../services/app-context";

const Header = () => {
  const { isAuth } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt={"логотип"} />
        </Link>
        <Navigation />
        {(!isAuth && (
          <Button onClick={() => navigate("/profile")} type={"ghost"}>
            Вход
          </Button>
        )) || (
          <Link to={"/profile"} className={styles.username}>
            {`${user?.first_name} ${user?.last_name[0]}.`}
          </Link>
        )}
      </header>
    </div>
  );
};

export default Header;
