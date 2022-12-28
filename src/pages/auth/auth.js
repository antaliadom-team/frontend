import styles from "./auth.module.css";
import signupImage from "../../images/reg-auth.png";
import { Routes, Route } from "react-router-dom";
import SignUp from "../../components/forms/auth-form";

const Auth = () => {
  return (
    <section className={styles.signup}>
      <button className={styles.back_to_lk_btn}>Назад в личный кабинет</button>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <Routes className={styles.form}>
          <Route path="/auth" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/change-password" element={<SignUp />} />
          <Route path="/change-profile" element={<SignUp />} />
        </Routes>
      </div>
    </section>
  );
};

export default Auth;
