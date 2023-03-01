import styles from "./app.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Catalog, Home, ProductPage, Profile, Order } from "../../pages";
import { Register, Logout, EditProfile, EditPassword, Object, Login } from "../forms";
import Header from "../header/header";
import Footer from "../footer/footer";
import { AuthContext, ModalContext, UserContext } from "../../services/app-context";
import { useContext } from "react";
import Modal from "../modal/modal";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import { Button } from "../ui/buttons";
import { logoutUser } from "../../services/api/user";

const App = () => {
  const { modal, setModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);
  const modalClose = () => {
    setModal({object: false, exit: false});
  };

  const logout = () => {
    modalClose();
    logoutUser(setAuth, setUser);
    navigate("/")
  }

  if (modal.object || modal.exit) {
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
          <Route path="/order" element={<Order />} />
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
        {modal.object && (
          <Modal onClose={modalClose}>
            <Object />
          </Modal>
        )}
        {modal.exit && (
          <Modal onClose={modalClose}>
            <div className={styles.exit}>
              <h2>Вы уверены, что хотите выйти из личного кабинета?</h2>
              <div>
                <Button type={"primary"} onClick={logout}>Да, выйти</Button>
              </div>
              <div>
                <Button type={"ghost"} onClick={() => {
                  modalClose();
                  navigate("/profile");
                }}>Нет, вернуться в личный кабинет</Button>
              </div>

            </div>

          </Modal>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
