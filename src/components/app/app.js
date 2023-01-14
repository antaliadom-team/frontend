import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, ProductPage, Auth } from "../../pages";
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
          <Route path="/sample-product-page" element={<ProductPage />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
