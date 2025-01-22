import React from 'react';
import styles from '../styles/Signup.module.css';
import passimg from "../assets/v1_16.png";
import usrimg from "../assets/v3_32.png";
import mailimg from "../assets/v1_17.png";


const Signup = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Sign Up</h1>
        <div className={styles.inputGroup}>
          <span className={styles.icon}><img src={usrimg} alt="user" style={{ width: '25px', height: '25px' }}  />
          </span>
          <input type="text" placeholder="Full Name" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <span className={styles.icon}><img src={mailimg} alt="mail" style={{ width: '25px', height: '25px' }}  /></span>
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <span className={styles.icon}><img src={passimg} alt="pass" style={{ width: '25px', height: '25px' }}  /></span>
          <input type="password" placeholder="Password" className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <select className={styles.select}>
            <option value="" disabled selected>
              Select Account type
            </option>
            <option value="Investor">Investor</option>
            <option value="Company">Company</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        <p className={styles.loginText}>
          Already have an account? <a href="#" className={styles.link}>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
