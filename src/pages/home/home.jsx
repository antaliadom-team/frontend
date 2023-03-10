import Ads from "../../components/ads/ads";
import Promo from "../../components/promo/promo";
import Advantages from "../../components/advantages/advantages";
import styles from "./home.module.css";
import About from "../../components/about/about";
import Team from "../../components/team/team";
import { MainForm } from "../../components/forms";

const Home = () => {
  return (
    <div className={styles.home}>
      <Promo />
      <About />
      <Team />
      <Advantages />
      <Ads />
      <MainForm />
    </div>
  );
};

export default Home;
