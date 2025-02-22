import React from 'react';
import styles from '../styles/StepCard.module.css'; // Import the styles for StepCard

const StepCard = ({ title, description }) => {
  return (
    <div className={styles.stepCard}>
      <h2 className={styles.stepTitle}>{title}</h2>
      <p className={styles.stepDescription}>{description}</p>
    </div>
  );
};
export { StepCard };

