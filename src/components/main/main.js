import styles from "./main.module.css";
import MainForm from "./main-form/main-form";
import About from "./about/about";
import Advertisement from "./advertisement/advertisement";
import Promo from "./promo/promo";

const Main = () => {
  return (
    <div className={styles.main}>
      <Promo />
      <About />
      <Advertisement />
      <MainForm />
    </div>
  );
};

export default Main;
