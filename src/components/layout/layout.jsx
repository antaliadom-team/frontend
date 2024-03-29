import styles from "./layout.module.css";
import { Outlet } from "react-router-dom";
import signupImage from "../../images/reg-auth.png";
import { useSelector } from "react-redux";


const Layout = () => {
  const screen = useSelector(store => store.screen);

  if (!screen.desktop) {
    return (<Outlet />)
  }

  return (
    <section className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.image_and_block}>
          <img className={styles.image} src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <div className={styles.form}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Layout;
