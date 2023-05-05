import React from "react";

import google from "../assets/google.svg";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h2>Welcome to iMessenger!</h2>
        <div className={styles.button}>
          <div className={styles.logoContainer}>
            <img src={google} alt="Google Logo" />
          </div>
          <span>Sign in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
