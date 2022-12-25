import Advertisement from "../../components/advertisement/advertisement";
import Promo from "../../components/promo/promo";
import Advantages from "../../components/advantages/advantages";
import MainForm from "../../components/forms/main-form";
import styles from "./home.module.css";
import AboutUs from "../../components/about-us/about-us";
import AboutTeam from "../../components/about-team/about-team";

const Home = () => {
  return (
    <div className={styles.home}>
      <Promo />
      <AboutUs />
      <AboutTeam />
      <Advantages />
      <Advertisement />
      <MainForm />
    </div>
  );
};

export default Home;
