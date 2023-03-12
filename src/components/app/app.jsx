import styles from "./app.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Catalog, Home, ProductPage, Profile, Order } from "../../pages";
import { Register, Logout, EditProfile, EditPassword, Login } from "../forms";
import Header from "../header/header";
import Footer from "../footer/footer";
import { AuthContext, ModalContext, ScreenWidthContext, UserContext } from "../../services/app-context";
import React, { useContext } from "react";
import Modal from "../modal/modal";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import { Button } from "../ui/buttons";
import { logoutUser } from "../../services/api/user";
import CatalogItem from "../catalog-item/catalog-item";
import { useScrollToLocation } from "../../hooks/use-scroll";
import PolicyText from "../policy-text/policy-text";

const App = () => {
  const { modal, setModal } = useContext(ModalContext);
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const { screenWidth } = useContext(ScreenWidthContext);

  const modalClose = () => {
    setModal({ object: false, exit: false, passwordChanged: false, policy: false });
  };

  const logout = () => {
    modalClose();
    logoutUser(setAuth, setUser);
    navigate("/");
  };

  if (modal.object || modal.exit) {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };
  } else {
    window.onscroll = () => {};
  }

  React.useEffect(() => {
    if (modal.policy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal.policy]);

  useScrollToLocation();

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
            <div className={styles.object}>
              <h2>Ваша заявка отправлена!</h2>
              <div>
                <CatalogItem withBtn={false} />
              </div>
              <div>
                <Button
                  type={"primary"}
                  width={"100%"}
                  onClick={() => {
                    modalClose();
                    navigate("/");
                  }}>
                  На главную
                </Button>
              </div>
            </div>
          </Modal>
        )}
        {modal.exit && (
          <Modal onClose={modalClose}>
            <div className={styles.exit}>
              <h2>Вы уверены, что хотите выйти из личного кабинета?</h2>
              <div>
                <Button type={"primary"} onClick={logout}>
                  {screenWidth !== "mobile" ? "Да, выйти" : "Да"}
                </Button>
              </div>
              <div>
                <Button
                  type={"ghost"}
                  onClick={() => {
                    modalClose();
                    navigate("/profile");
                  }}>
                  {screenWidth !== "mobile" ? "Нет, вернуться в личный кабинет" : "Отменить"}
                </Button>
              </div>
            </div>
          </Modal>
        )}
        {modal.passwordChanged && (
          <Modal onClose={modalClose}>
            <div className={styles.password}>
              <h2>Изменения сохранены</h2>
              <div>
                <Button
                  type={"primary"}
                  onClick={() => {
                    modalClose();
                    navigate("/profile");
                  }}>
                  Понятно
                </Button>
              </div>
            </div>
          </Modal>
        )}
        {modal.policy && (
          <Modal onClose={modalClose}>
            <div>
              <PolicyText />
              <div className={styles.policyBtn}>
                <Button
                  type={"primary"}
                  onClick={() => {
                    modalClose();
                  }}>
                  Принять условия
                </Button>
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
