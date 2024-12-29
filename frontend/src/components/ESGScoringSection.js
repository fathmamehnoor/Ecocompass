import React from "react";
import FileUpload from "./FileUpload";

const ESGScoringSection = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>ESG Scoring</h2>
      <p style={styles.text}>
        Upload your ESG report today and take the first step toward driving meaningful
        change and showcasing your dedication to a sustainable future!
      </p>
      <FileUpload />
    </section>
  );
};

const styles = {
  section: {
    padding: "20px",
    textAlign: "center",
  },
  heading: { fontSize: "32px", fontWeight: "bold", marginBottom: "10px" },
  text: { fontSize: "16px", color: "#555", marginBottom: "20px" },
};

export default ESGScoringSection;
