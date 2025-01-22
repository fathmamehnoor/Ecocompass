import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EcoCompass } from "./pages/EcoCompass"; // Updated path for EcoCompass
import './App.css'; // Import global styles if needed

function App() {
  return (
    <Router>
      <Routes>
        {/* Render EcoCompass (which includes LandingPage) at the home route */}
        <Route path="/" element={<EcoCompass />} />
        {/* Add additional routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App; 

