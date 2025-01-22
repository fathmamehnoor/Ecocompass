import * as React from "react";
import { CompanyHomePageScoreCard } from "../components/CompanyHomePageScoreCard";
import { CompanyHomePageBadgesCard } from "../components/CompanyHomePageBadgesCard";
import Headerfileupload from "../components/Headerfileupload";
import { CompanyHomePageUploadSection } from "../components/CompanyHomePageUploadSection";
import { FaArrowRight } from "react-icons/fa"; // Importing arrow icon

export function CompanyHomePage() {
  return (
    <div className="flex flex-col items-center px-10 py-12 bg-white max-md:px-5">
      <Headerfileupload />
      <div className="mt-14 w-full max-w-[1112px] max-md:mt-10 max-md:max-w-full">
        {/* Wrapper for ScoreCard and BadgesCard */}
        <div className="flex justify-center items-center gap-10 max-md:flex-col w-full">
          {/* Score Card */}
          <CompanyHomePageScoreCard />
          {/* Badges Card */}
          <CompanyHomePageBadgesCard />
        </div>
        
        {/* Link Section */}
        <div className="flex justify-center mt-10">
          <a
            href="#"
            className="text-2xl font-semibold text-black-500 hover:text-black-600 flex items-center gap-2"
          >
            Current Analysis <FaArrowRight />
          </a>
        </div>
      </div>
      <CompanyHomePageUploadSection />
    </div>
  );
}
