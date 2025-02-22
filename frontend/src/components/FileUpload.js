import React, { useState } from "react";
import upload from "../assets/upload.png";
import { Link } from "react-router-dom"; // Import Link component for routing

const FileUpload = () => {
  const [file, setFile] = useState(null); // Initialize state for file

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile); // Set the first file selected
  };

  return (
    <div className="bg-white p-6 rounded-lg w-full max-w-4xl mx-auto text-center overflow-hidden">
      <h3 className="text-xl md:text-2xl font-bold mb-6">Upload Files</h3>
      <div className="border-2 border-dashed border-gray-400 p-6 rounded-lg bg-green-100 mb-6">
        <img
          src={upload}
          alt="upload"
          className="h-24 md:h-32 mx-auto mb-4"
        />
        <p className="text-base md:text-lg">Drag and Drop file</p>
        <div className="font-bold my-4">OR</div>
        <form>
          {/* Hidden file input */}
          <input
            type="file"
            onChange={handleFileChange}
            id="file-upload"
            className="hidden"
          />
          {/* Custom button */}
          <label
            htmlFor="file-upload"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer text-base md:text-lg"
          >
            Choose File
          </label>
        </form>
        {/* Display chosen file */}
        {file && (
          <div className="mt-4 text-gray-700 text-base md:text-lg">
            <p>Chosen file: {file.name}</p>
          </div>
        )}
      </div>

      {/* Upload Button wrapped in Link */}
      <Link
        to="/fileupload" // Link to the upload page (change the path as per your route)
        className="mt-6 inline-block px-8 py-3 bg-green-500 text-white rounded-lg text-base md:text-lg"
      >
        Upload
      </Link>
    </div>
  );
};

export default FileUpload;
