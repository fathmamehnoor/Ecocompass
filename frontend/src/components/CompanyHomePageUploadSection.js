import React, { useState } from "react";
import FileUpload from "./FileUpload"; // Import your FileUpload component

export function CompanyHomePageUploadSection() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <h1 className="mt-24 ml-5 text-6xl font-semibold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Upload your ESG Report and get your ESG Score
      </h1>
      <button
        onClick={openModal}
        className="px-12 pt-5 pb-8 mt-10 ml-9 text-2xl font-semibold text-center text-black bg-green-300 border-2 border-black border-solid rounded-[40px] max-md:px-5 max-md:mt-5 max-md:ml-2.5 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Upload now
      </button>

      {/* Modal - Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg text-center overflow-hidden">
            <FileUpload closeModal={closeModal} /> {/* Your FileUpload component inside the modal */}
            <button
              onClick={closeModal}
              className="mt-6 px-8 py-3 bg-gray-300 text-black rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
