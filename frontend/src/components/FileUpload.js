import React, { useState } from "react";
import upload from "../assets/upload.png";

const FileUpload = () => {
  const [file, setFile] = useState(null); // Initialize state for file

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Set the first file selected
  };

  return (
    <div style={styles.uploadContainer}>
      <h3 style={styles.title}>Upload Files</h3>
      <div style={styles.box}>
        <img src={upload} alt="upload" style={styles.uploadImage} />
        <p>Drag and Drop file</p>
        <div className="OR" style={styles.OR}>
          <p>OR</p>
        </div>

        <form>
          {/* Hide the default file input */}
          <input
            type="file"
            onChange={handleFileChange}
            id="file-upload"
            style={styles.hiddenInput}
          />
          
          {/* Custom button to trigger file input */}
          <label htmlFor="file-upload" style={styles.customButton}>
            Choose File
          </label>
        </form>
        
        {/* Display chosen file */}
        {file && (
          <div style={styles.fileInfo}>
            <p>Chosen file: {file.name}</p>
          </div>
        )}
      </div>
      <button style={styles.uploadButton}>Upload</button>
    </div>
  );
};

const styles = {
  uploadContainer: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
    boxSizing: "border-box", // Ensures padding/border don't cause overflow
    overflow: "hidden", // Prevents scrollbars if content overflows
  },
  title: { fontSize: "20px", marginBottom: "15px" },
  box: {
    border: "2px dashed #aaa",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#e9f8e9",
    marginBottom: "15px",
    boxSizing: "border-box", // Prevent overflow due to padding/border
  },
  icon: { fontSize: "24px", marginBottom: "10px", display: "block" },
  uploadButton: {
    marginTop: "10px",
    padding: "10px 30px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  customButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  hiddenInput: {
    display: "none", // Hides the default file input
  },
  OR: {
    fontWeight: "bold",
  },
  uploadImage: {
    height: "100px",
  },
  fileInfo: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#333",
  },
};

export default FileUpload;
