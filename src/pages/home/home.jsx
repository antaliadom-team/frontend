import styles from "./home.module.css";
import Ads from "./ads/ads";
import Promo from "./promo/promo";
import Advantages from "./advantages/advantages";
import About from "./about/about";
import Team from "./team/team";
import Form from "./form/form";

const Home = () => {
  return (
    <div className={styles.home}>
      <Promo />
      <About />
      <Team />
      <Advantages />
      <Ads />
      <Form />
    </div>
  );
};

export default Home;
