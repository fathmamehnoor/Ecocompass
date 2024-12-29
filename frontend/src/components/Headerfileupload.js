import React from "react";

const Headerfileupload = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>EcoCompass</h1>
      <nav>
        <ul style={styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </nav>
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
    width: "80%", // Adjust width of the header
    margin: "0 auto", // Center the header horizontally
    backgroundColor: "#e9f8e9", // Background color for the header only
    borderRadius: "10px", // Add border radius for rounded corners
    marginTop:"10px",
    fontWeight: "bold",
  },
  logo: { color: "green", fontWeight: "bold", fontSize: "24px" },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  },
};

export default Headerfileupload;
