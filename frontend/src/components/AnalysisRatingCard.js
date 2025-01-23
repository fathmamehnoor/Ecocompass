import * as React from "react";

function AnalysisRatingCard({ rating }) {
  return (
    <div className="flex flex-col grow items-start px-11 pt-9 pb-28 w-full font-bold text-black bg-white shadow-[9px_9px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:mt-10">
      <div className="text-3xl">ESG Rating: </div>
      <div className="mt-16 ml-12 text-5xl max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        8.67
      </div>
    </div>
  );
}

export default AnalysisRatingCard;