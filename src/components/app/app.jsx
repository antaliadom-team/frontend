import styles from "./app.module.css";
import { Routes, Route, useLocation } from "react-router-dom";
import {
    Catalog,
    Home,
    Object,
    Profile,
    EditProfile,
    Order,
    Register,
    Logout,
    Login,
    ChangePassword,
    EditPassword,
    ForgotPassword,
    Developers,
} from "../../pages";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useLayoutEffect } from "react";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import { useScrollToLocation } from "../../hooks/use-scroll";
import Modals from "../modals";
import Cookie from "../cookie/cookie";
import useScreen from "../../hooks/use-screen";
import { useGetUserQuery } from "../../store/users-api";

const App = () => {
    const { pathname } = useLocation();

    useScrollToLocation();
    useScreen();
    useGetUserQuery();

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
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/order/:id" element={<Order />} />
                    <Route path="/object/:id" element={<Object />} />
                    <Route element={<Layout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/edit-profile" element={<EditProfile />} />
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
            <Cookie />
        </div>
    );
};

export default App;
