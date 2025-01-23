import * as React from "react";

const AnalysisESGRankCard = () => {
  return (
    <div className="flex flex-col pt-3.5 pb-7 mx-auto w-full bg-white shadow-[9px_9px_4px_rgba(0,0,0,0.25)] max-md:mt-10 max-md:max-w-full">
      <div className="self-center max-w-full w-[591px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df8402a1ce353ce899b66fb738d2353953f4047931cf2391a6855b57f06ac10f?placeholderIfAbsent=true&apiKey=09325b95264143aebd92e4c7eabcc1bf"
              alt="ESG Rank Chart"
              className="object-contain grow shrink-0 max-w-full aspect-[1.09] w-[175px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch my-auto text-2xl text-black max-md:mt-10">
              ESG Ranking (%) Compared with 30482 Companies
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa95439fd388432b3c36157b94081d5740b7669f773e924a78b8a2d662856548?placeholderIfAbsent=true&apiKey=09325b95264143aebd92e4c7eabcc1bf"
        alt=""
        className="object-contain mt-4 aspect-[10.75] w-[719px] max-md:max-w-full"
      />
    </div>
  );
}
export default AnalysisESGRankCard;