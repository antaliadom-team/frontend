import styles from "./profile.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CatalogItem from "../../components/catalog-item/catalog-item";
import { UserName } from "../../services/app-context";

const Profile = () => {
  const userName = useContext(UserName);
  const logout = (e) => {
    e.preventDefault();
    console.log('вы вышли!')
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Здравствуйте, {userName}</h2>
      <div className={styles.btn_box}>
        <Link className={styles.edit_btn} to='/edit-profile'>Редактировать профиль</Link>
        <button className={styles.logout_btn} onClick={logout}>Выйти из профиля</button>
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
  )
};

export default Profile;