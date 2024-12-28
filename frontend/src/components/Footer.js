import React from 'react';
import styles from '../styles/EcoCompassGuide.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          <strong>Contact Us:</strong>
        </p>
        <p className={styles.footerText}>
          Email: <a href="mailto:support@ecoCompass.com">support@ecoCompass.com</a>
        </p>
        <p className={styles.footerText}>
          Phone: +123 456 7890
        </p>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          © 2024 EcoCompass. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
