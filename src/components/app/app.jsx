import styles from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import { Catalog, Home, ProductPage, Profile } from "../../pages";
import Header from "../header/header";
import Footer from "../footer/footer";
import { ModalContext } from "../../services/app-context";
import React, { useContext } from "react";
import Modal from "../modal/modal";
import Object from "../forms/object/object";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import Login from "../forms/login/login";
import Logout from "../forms/logout/logout";
import Register from "../forms/register/register";
import EditProfile from "../forms/edit-profile/edit-profile";
import EditPassword from "../forms/edit-password/edit-password";

const App = () => {
  const { modal, setModal } = useContext(ModalContext);
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
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/sample-product-page" element={<ProductPage />} />
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/edit-password" element={<EditPassword />} />
          </Route>
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
            <Object />
          </Modal>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
