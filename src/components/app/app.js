import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { About, Catalog, Home, Profile, ProductPage, Auth } from "../../pages";
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
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
