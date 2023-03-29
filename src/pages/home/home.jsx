import Ads from "./ads/ads";
import Promo from "./promo/promo";
import Advantages from "./advantages/advantages";
import styles from "./home.module.css";
import About from "./about/about";
import Team from "./team/team";
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
