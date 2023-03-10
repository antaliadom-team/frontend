import Ads from "../../components/ads/ads";
import Promo from "../../components/promo/promo";
import Advantages from "../../components/advantages/advantages";
import styles from "./home.module.css";
import AboutUs from "../../components/about-us/about-us";
import AboutTeam from "../../components/about-team/about-team";
import { MainForm } from "../../components/forms";

const Home = ({ objects }) => {
  return (
    <div className={styles.home}>
      <Promo />
      <AboutUs />
      <AboutTeam />
      <Advantages />
      <Ads objects={objects} />
      <MainForm />
    </div>
  );
};

export default Home;
