import styles from "./app.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Catalog, Home, Object, Profile, Order } from "../../pages";
import { Register, Logout, EditProfile, Login } from "../forms";
import Header from "../header/header";
import Footer from "../footer/footer";
import { AuthContext, ModalContext, UserContext } from "../../services/app-context";
import { useContext, useState } from "react";
import ProtectedRoute from "../protected-route/protected-route";
import Layout from "../layout/layout";
import { logoutUser } from "../../services/api/user";
import { useScrollToLocation } from "../../hooks/use-scroll";
import { SliderModal, PasswordModal, ExitModal, ObjectModal, Policy, Submit } from "../modals";
import PasswordForm from "../forms/password";
import Change from "../forms/password/change";

const App = () => {
    const { modal, setModal } = useContext(ModalContext);
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const { setUser } = useContext(UserContext);
    const [successPassword, setSuccessPassword] = useState(false);

    const modalClose = () => {
        setModal({ object: false, exit: false, passwordChanged: false, policy: false, slider: false, submit: false });
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

    useScrollToLocation();

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
                        <Route path="/edit-password" element={<PasswordForm />} />
                        <Route
                            path="/password-reset/:uid/:token"
                            element={
                                <Change successPassword={successPassword} setSuccessPassword={setSuccessPassword} />
                            }
                        />
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
                <ObjectModal isOpen={modal.object} onClose={modalClose} />
                <ExitModal isOpen={modal.exit} onClose={modalClose} logout={logout} />
                <PasswordModal isOpen={modal.passwordChanged} onClose={modalClose} />
                <SliderModal isOpen={modal.slider} onClose={modalClose} />
                <Policy isOpen={modal.policy} onClose={modalClose} />
                <Submit isOpen={modal.submit} onClose={modalClose} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
