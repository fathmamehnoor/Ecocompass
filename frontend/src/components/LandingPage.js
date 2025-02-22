import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for React Router

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 sm:px-12 md:px-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black mt-12">
        "Empowering Responsible Investments through ESG Transparency."
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-black mt-12 max-w-4xl">
        Welcome to EcoCompass. Powering financial markets to deliver a sustainable future.
      </h2>
      <Link
        to="/learn-more" // Link to the "Learn more" page
        className="mt-12 px-8 py-4 bg-green-600 text-black text-xl font-medium rounded-full border-2 border-black transition duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Learn more about EcoCompass
      </Link>
    </main>
  );
}
