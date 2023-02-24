import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo_mobile.svg";
import { Button } from "../ui/buttons";
import { useContext, useState } from "react";
import { AuthContext, UserContext } from "../../services/app-context";

const Mobile = () => {
  const { isAuth } = useContext(AuthContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const list = [{ link: "/", text: "Главная" }, { link: "/#about", text: "О нас" }, { link: "/catalog", text: "Каталог" }, { link: "/#send", text: "Оформить заявку" }];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.menu} onClick={() => setMenu(!menu)}>
          {menu && (
            <ul className={styles.menu_list}>
              {list.map((e, i) => {
                return (
                  <Link to={e.link} className={styles.menu_item} onClick={() => setMenu(!menu)} key={i}>
                    {e.text}
                  </Link>
                );
              })}
            </ul>
          )}
        </div>

        <Link to="/" className={styles.logo}>
          <img src={logo} alt={"логотип"} />
        </Link>

        {(!isAuth && (
          <Button onClick={() => navigate("/profile")} type={"text"}>
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

export default Mobile;
