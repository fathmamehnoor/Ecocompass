import React from 'react';

export const StepCard = ({ title, description }) => {
  return (
    <div className="stepCard bg-green-300 rounded-3xl shadow-xl text-black text-center flex-grow p-32 mx-auto lg:ml-20 lg:w-3/4 sm:w-full gap-4">
      <div className="stepTitle text-5xl sm:text-3xl font-playfair mb-8">{title}</div>
      <div className="stepDescription text-3xl sm:text-lg font-playfair mt-8">{description}</div>
    </div>
  );
};
