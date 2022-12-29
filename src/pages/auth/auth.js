import styles from "./auth.module.css";
import signupImage from "../../images/reg-auth.png";
import { Routes, Route, Link } from "react-router-dom";
import { EditProfile, SignIn } from "../../components/forms/auth-form";

const Auth = () => {
  return (
    <section className={styles.auth}>
      <Link className={styles.back_to_lk_btn}>Назад в личный кабинет</Link>
      <div className={styles.container}>
        <div className={styles.image_and_block}>
          <img className={styles.image} src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <div className={styles.form}>
          <Routes className={styles.form}>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignIn />} />
            <Route path="/change-password" element={<SignIn />} />
            <Route path="/change-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Auth;
