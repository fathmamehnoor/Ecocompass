import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for React Router

export const ContentSection = ({ image, title, description, imageFirst }) => {
  const ImageContent = (
    <div className="flex flex-col items-center justify-center w-full md:w-1/3">
      <img
        src={image}
        alt={title}
        className="w-full max-w-full rounded-3xl mt-4 transform transition-transform duration-300 ease-in-out hover:scale-105"
        loading="lazy"
        width="350"
        height="350"
      />
    </div>
  );

  const TextContent = (
    <div className="flex flex-col items-center md:items-start w-full md:w-2/3 md:ml-4">
      <div className="flex flex-col">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-black mb-4">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="flex flex-col md:flex-row gap-4 my-8 px-4 md:px-6 max-w-6xl mx-auto">
      {imageFirst ? (
        <>
          {ImageContent}
          {TextContent}
        </>
      ) : (
        <>
          {TextContent}
          {ImageContent}
        </>
      )}
    </section>
  );
};
