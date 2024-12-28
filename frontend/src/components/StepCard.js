import React from 'react';
import styles from '../styles/StepCard.module.css';

export const StepCard = ({ title, description }) => {
  return (
    <div className={styles.stepCard}>
      <div className={styles.stepTitle}>{title}</div>
      <div className={styles.stepDescription}>{description}</div>
    </div>
  );
};