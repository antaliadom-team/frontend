import styles from "./app.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Catalog, Home, Object, Profile, Order } from "../../pages";
import { Register, Logout, EditProfile, Login } from "../forms";
import Header from "../header/header";
import Footer from "../footer/footer";
import { UserContext } from "../../services/app-context";
import { useContext, useLayoutEffect } from "react";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import { useScrollToLocation } from "../../hooks/use-scroll";
import Modals from "../modals";
import { ChangePassword, EditPassword, ForgotPassword } from "../../pages/password";
import CookiePopup from "../cookie-popup/cookiePopup";

const App = () => {
    const { pathname } = useLocation();
    const { setUser } = useContext(UserContext);

    useScrollToLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/order/:id" element={<Order />} />
                    <Route path="/object/:id" element={<Object />} />
                    <Route element={<Layout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/edit-profile" element={<EditProfile setUser={setUser} />} />
                        <Route path="/edit-password" element={<EditPassword />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/password-reset/:uid/:token" element={<ChangePassword />} />
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
            </div>
            <Footer />
            <Modals />
            <CookiePopup />
        </div>
    );
};

export default App;
