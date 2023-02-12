import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, ProductPage, Login, Profile } from "../../pages";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ModalContext, UserContext, AuthContext } from "../../services/app-context";
import { useState } from "react";
import Modal from "../modal/modal";
import ObjectForm from "../forms/object-from/object-form";
import ProtectedRoute from "../protected-route/protected-route";

const App = () => {
  const [modal, setModal] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const user = {
    name: "Александр",
    email: "alex@mail.com",
    password: "123",
  };

  const modalClose = () => {
    setModal(false);
  };

  if (modal) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  } else {
    window.onscroll = () => {};
  }

  return (
    <UserContext.Provider value={user}>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <ModalContext.Provider value={{ modal, setModal }}>
          <div className={styles.app}>
            <Header />
            <div className={styles.main}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/sample-product-page" element={<ProductPage />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
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
      </AuthContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
