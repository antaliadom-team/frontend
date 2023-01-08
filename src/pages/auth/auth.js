import styles from "./auth.module.css";
import signupImage from "../../images/reg-auth.png";
import { Routes, Route, Link } from "react-router-dom";
import {
  EditPassword,
  EditProfile,
  LogOut,
  SignIn,
  SignUp,
} from "../../components/forms/auth-form";
import React from "react";

const Auth = ({ isLoggedIn }) => {
  const { isUserEmailCorrect, setIsUserEmailCorrect } = React.useState(true);

  return (
    <section className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.image_and_block}>
          <Link to="/auth/signup" className={styles.back_to_lk_btn}>
            Назад в личный кабинет
          </Link>
          <img className={styles.image} src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <div className={styles.form}>
          <Routes className={styles.form}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/edit-password"
              isUserEmailCorrect={isUserEmailCorrect}
              element={<EditPassword />}
            />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route
              path="/logout"
              element={<LogOut />}
              isLoggedIn={isLoggedIn}
            />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Auth;
