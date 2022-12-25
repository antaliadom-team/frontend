import Advertisement from "../../components/advertisement/advertisement";
import Promo from "../../components/promo/promo";
import About from "../../components/about/about";
import MainForm from "../../components/main-form/main-form";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Promo />
      <About />
      <Advertisement />
      <MainForm />
    </div>
  );
};

export default Home;
