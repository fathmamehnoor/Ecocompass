import React from 'react';
import styles from '../styles/Header.module.css';  // Ensure correct import

export function Header() {
  return (
    <header className={styles.hheader}>
      <div className={styles.hlogo}>EcoCompass</div>
      <nav className={styles.hnavigation}>
        <a href="/" tabIndex="0">Home</a>
        <a href="/about" tabIndex="0">About</a>
        <a href="/login" tabIndex="0">Login</a>
      </nav>
    </header>
  );
}
