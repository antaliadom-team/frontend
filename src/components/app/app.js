import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { About, Catalog, Home, Profile } from "../../pages";
import Header from "../header/header";
import Main from "../main/main";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
