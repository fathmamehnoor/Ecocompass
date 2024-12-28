import React from 'react';
 // Adjust path if necessary
import styles from '../styles/LandingPage.module.css'; // Ensure path is correct

export default function LandingPage() {
  return (
    <main className={styles.lcontainer}>
      <h1 className={styles.lmainHeading}>
        "Empowering Responsible Investments through ESG Transparency."
      </h1>
      <h2 className={styles.lsubHeading}>
        Welcome to EcoCompass. Powering financial markets to deliver a sustainable future.
      </h2>
      <button
        className={styles.lctaButton}
        tabIndex="0"
        onClick={() => (window.location.href = '/learn-more')}
      >
        Learn more about EcoCompass
      </button>
    </main>
  );
}

