import React from "react";
import styles from "./login.module.css";
import signupImage from "../../images/reg-auth.png";
import SignInForm from "../../components/forms/sign-in-form/sign-in-form";

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.image_and_block}>
          <img className={styles.image} src={signupImage} alt="фото комнаты" />
          <div className={styles.block} />
        </div>
        <div className={styles.form}>
            <SignInForm />
        </div>
      </div>
    </section>
  );
};

export default Login;