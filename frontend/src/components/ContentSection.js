import React from 'react';
import styles from '../styles/EcoCompass.module.css';

export const ContentSection = ({ image, title, description, imageFirst }) => {
  const ImageContent = (
    <div className={styles.secimageColumn}>
      <img
        src={image}
        alt={title}
        className={styles.secsectionImage}
        loading="lazy"
        width="450"
        height="450"
      />
    </div>
  );

  const TextContent = (
    <div className={styles.sectextColumn}>
      <div className={styles.sectextContent}>
        <h2 className={styles.secheading}>{title}</h2>
        <p className={styles.secdescription}>{description}</p>
      </div>
    </div>
  );

  return (
    <section className={styles.secsection}>
      {imageFirst ? (
        <>
          {ImageContent}
          {TextContent}
        </>
      ) : (
        <>
          {TextContent}
          {ImageContent}
        </>
      )}
    </section>
  );
};