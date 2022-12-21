import logo from "../../images/logo.svg";
import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { About, Catalog, Home, Profile } from "../../pages";
import Header from "../header/header";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
