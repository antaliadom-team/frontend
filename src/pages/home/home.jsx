import Ads from "../../components/ads/ads";
import Promo from "../../components/promo/promo";
import Advantages from "../../components/advantages/advantages";
import Main from "../../components/forms/main/main";
import styles from "./home.module.css";
import AboutUs from "../../components/about-us/about-us";
import AboutTeam from "../../components/about-team/about-team";

const Home = ({ objects }) => {
  return (
    <div className={styles.home}>
      <Promo />
      <AboutUs />
      <AboutTeam />
      <Advantages />
      <Ads objects={objects} />
      <Main />
    </div>
  );
};

export default Home;
