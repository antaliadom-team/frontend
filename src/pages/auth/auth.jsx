import styles from "./auth.module.css";
import signupImage from "../../images/reg-auth.png";
import { Routes, Route, Link } from "react-router-dom";
import //   EditPassword,
//   EditProfile,
//   LogOut,
//   SignIn,
//   SignUp,
"../../components/forms/auth-form";
import React from "react";
import { SignIn } from "../../components/forms/signIn";

const Auth = ({ isLoggedIn }) => {
  const [isUserEmailCorrect, setUserEmailCorrect] = React.useState(false);

  return (
    <section className={styles.auth}>
      <div className={styles.container}>
        <div className={styles.image_and_block}>
          <Link to="/profile" className={styles.back_to_lk_btn}>
            Назад в личный кабинет
          </Link>
          <img className={styles.image} src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <div className={styles.form}>
          <Routes className={styles.form}>
            <Route path="/" element={<SignIn />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route
              path="/edit-password"
              element={<EditPassword isUserEmailCorrect={isUserEmailCorrect} />}
            />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route
              path="/logout"
              element={<LogOut />}
              isLoggedIn={isLoggedIn}
            /> */}
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Auth;
