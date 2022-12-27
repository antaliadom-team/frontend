import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { About, Catalog, Home, Profile, ProductPage } from "../../pages";
import Header from "../header/header";
import Footer from "../footer/footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/sample-product-page" element={<ProductPage />} />
        </Routes>
      </div>
        <Footer />
    </div>
  );
};

export default App;
