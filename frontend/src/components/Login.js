import React from 'react';
import styles from '../styles/Login.module.css';
import mailimg from "../assets/v1_17.png";
import passimg from "../assets/v1_16.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>WELCOME !</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.icon}>
              <img src={mailimg} alt="mail" style={{ width: '25px', height: '25px' }}  />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.icon}>
              <img src={passimg} alt="pass" style={{ width: '25px', height: '25px' }}  />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
            />
          </div>
          <div className={styles.forgotPassword}>
            <a href="#" className={styles.link} >Forgot Password?</a>
          </div>
          <button type="submit" className={styles.button}>
            LOGIN
          </button>
          <p className={styles.footerText}>
            Don't  have an account? <a href="#" className={styles.link}>Sign up</a>

            
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
