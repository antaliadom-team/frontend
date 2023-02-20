import styles from "./profile.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { UserContext } from "../../services/app-context";
import { Button } from "../../components/ui/buttons";

const Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Здравствуйте, {user?.first_name} </h2>
      <div className={styles.btn_box}>
        <Button type={"text"} onClick={()=> navigate("/edit-profile")}>
          Редактировать профиль
        </Button>
        <Button type={"text"} onClick={() => navigate("/logout")}>
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
