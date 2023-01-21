import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, ProductPage, Auth } from "../../pages";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ModalContext } from "../../services/app-context";
import { useState } from "react";
import Modal from "../modal/modal";
import ObjectForm from "../forms/object-form";

const App = () => {
  const [modal, setModal] = useState(false);

  const modalClose = () => {
    setModal(false);
  };

  if (modal) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {window.scrollTo(x, y)}
  } else {
    window.onscroll = () => {};
  }

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      <div className={styles.app}>
        <Header />
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/sample-product-page" element={<ProductPage />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
          {modal && (
            <Modal onClose={modalClose}>
              <ObjectForm />
            </Modal>
          )}
        </div>
        <Footer />
      </div>
    </ModalContext.Provider>
  );
};

export default App;
