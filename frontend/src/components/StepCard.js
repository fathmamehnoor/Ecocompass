import React from 'react';

const StepCard = ({ title, description }) => {
  return (
    <div className="stepCard bg-green-300 rounded-3xl shadow-xl text-black text-center flex-grow p-10 mx-auto lg:ml-20 lg:w-3/4 sm:w-full gap-4">
      <h2 className="stepTitle text-5xl sm:text-3xl font-playfair mb-8">{title}</h2>
      <p className="stepDescription text-3xl sm:text-lg font-playfair mt-8">{description}</p>
    </div>
  );
};

export { StepCard };
