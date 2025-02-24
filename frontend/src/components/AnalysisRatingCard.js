import React from "react";
import { useLocation } from "react-router-dom";

function AnalysisRatingCard() {
  const location = useLocation();
  const esgData = location.state?.esgData; // Get ESG data from navigation state

  return (
    <div className="flex flex-col grow items-start px-11 pt-9 pb-28 w-full font-bold text-black bg-white shadow-[9px_9px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:pb-24 max-md:mt-10">
      <div className="text-3xl">ESG Rating:</div>
      {esgData ? (
        <div className="mt-16 ml-12 text-5xl max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
          {esgData.esg_score.toFixed(2)}
        </div>
      ) : (
        <div className="mt-16 ml-12 text-2xl max-md:mt-10 max-md:ml-2.5">
          No ESG Score Available
        </div>
      )}
    </div>
  );
}

export default AnalysisRatingCard;
