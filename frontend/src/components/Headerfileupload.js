import React, { useState } from "react";
import { Link } from 'react-router-dom';

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
          <li>
            <Link to="/" style={styles.navLink}>Home</Link> {/* Link for Home */}
          </li>
          <li>
            <Link to="/about" style={styles.navLink}>About</Link> {/* Link for About */}
          </li>
          <li>
            <Link to="/login" style={styles.navLink}>Login</Link> {/* Link for Login */}
          </li>
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
    width: "100%", // Increased from 80% to 90%
    margin: "0 auto",
    backgroundColor: "#e9f8e9",
    borderRadius: "10px",
    marginTop: "10px",
    fontWeight: "bold",
    position: "relative",
  },
  logo: { color: "green", fontWeight: "bold", fontSize: "24px" },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  hamburger: {
    display: "none",
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
    top: "60px",
    right: "10px",
    backgroundColor: "#e9f8e9",
    padding: "10px",
    borderRadius: "5px",
  },
  "@media (max-width: 768px)": {
    header: {
      padding: "10px 15px",
    },
    logo: {
      fontSize: "20px",
    },
    navList: {
      display: "none",
    },
    hamburger: {
      display: "flex",
    },
  },
};


export default Headerfileupload;
