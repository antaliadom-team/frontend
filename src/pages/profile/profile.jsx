import styles from "./profile.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { AuthContext, UserContext } from "../../services/app-context";
import { Button } from "../../components/ui/buttons";

const Profile = () => {
  const { name } = useContext(UserContext);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    setAuth(false);
    navigate("/");
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Здравствуйте, {name}</h2>
      <div className={styles.btn_box}>
        <Button type={"text"} onClick={()=> navigate("/edit-profile")}>
          Редактировать профиль
        </Button>
        <Button type={"text"} onClick={logout}>
          Выйти из профиля
        </Button>
      </div>
      <h3 className={styles.header}>Избранное</h3>
      <div className={styles.grid}>
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
        <CatalogItem />
      </div>
    </section>
  );
};

export default Profile;
