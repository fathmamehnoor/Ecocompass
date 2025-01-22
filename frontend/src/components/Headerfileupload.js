import React, { useState } from "react";

const Headerfileupload = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>EcoCompass</h1>
      <nav>
        <ul style={isMenuOpen ? { ...styles.navList, ...styles.menuOpen } : styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
      <div style={styles.hamburger} onClick={toggleMenu}>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    borderBottom: "1px solid #ccc",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "0 auto",
    backgroundColor: "#e9f8e9",
    borderRadius: "10px",
    marginTop: "10px",
    fontWeight: "bold",
    position: "relative", // Added for positioning the hamburger menu
  },
  logo: { color: "green", fontWeight: "bold", fontSize: "24px" },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  },
  hamburger: {
    display: "none", // Hidden by default, shown in smaller screens
    flexDirection: "column",
    justifyContent: "space-between",
    width: "30px",
    height: "21px",
    cursor: "pointer",
  },
  bar: {
    height: "3px",
    backgroundColor: "black",
    borderRadius: "5px",
  },
  menuOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px", // Position the dropdown below the header
    right: "10px",
    backgroundColor: "#e9f8e9",
    padding: "10px",
    borderRadius: "5px",
  },
  "@media (max-width: 768px)": {
    header: {
      padding: "10px 15px", // Reduced padding for mobile screens
    },
    logo: {
      fontSize: "20px", // Smaller font size for mobile
    },
    navList: {
      display: "none", // Hide the nav on smaller screens by default
    },
    hamburger: {
      display: "flex", // Display hamburger icon on small screens
    },
  },
};

export default Headerfileupload;
