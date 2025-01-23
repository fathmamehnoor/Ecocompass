import * as React from "react";

const AnalysisESGScoreCard = ()=> {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col font-bold text-black max-md:mt-10 max-md:max-w-full">
          <div className="self-start text-2xl">
            <span className="font-semibold">ESG Score (out of 100):</span>{" "}
            <span className="text-2xl font-extrabold">90</span>
          </div>
          <div className="flex flex-col items-center pl-9 mt-8 w-full text-lg max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-w-full w-[370px]">
              <div className="flex shrink-0 self-start mt-1 bg-cyan-900 h-[17px] w-[19px]"></div>
              <div className="flex-auto w-[328px]">Environmental 83</div>
            </div>
            <div className="shrink-0 self-stretch mt-2.5 h-px border border-black border-solid max-md:max-w-full"></div>
            <div className="mt-2 ml-7 text-sm font-semibold">
              Biodiversity 86
              <br />
              Pollution & Resources 80
              <br />
              Water security 81
              <br />
              Climate change 79
            </div>
            <div className="flex gap-5 mt-5 max-w-full w-[367px]">
              <div className="flex shrink-0 self-start mt-1 bg-slate-500 h-[17px] w-[19px]"></div>
              <div className="flex-auto w-[325px]">Social 85</div>
            </div>
            <div className="shrink-0 self-stretch mt-1.5 border border-black border-solid h-[3px] max-md:max-w-full"></div>
            <div className="mt-2 ml-7 text-sm font-semibold">
              Biodiversity 86
              <br />
              Pollution & Resources 80
              <br />
              Water security 81
              <br />
              Climate change 79
            </div>
            <div className="flex gap-5 mt-7 max-w-full w-[368px]">
              <div className="flex shrink-0 self-start bg-lime-200 h-[17px] w-[19px]"></div>
              <div className="flex-auto w-[326px]">Governance 90</div>
            </div>
            <div className="shrink-0 self-stretch mt-2.5 h-px border border-black border-solid max-md:max-w-full"></div>
            <div className="mt-2 ml-6 text-sm font-semibold">
              Biodiversity 86
              <br />
              Pollution & Resources 80
              <br />
              Water security 81
              <br />
              Climate change 79
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b77a63dcf0f90a7f48253cb78aedfdf146a7cda0d44bf44e0d506ed6d3580ca?placeholderIfAbsent=true&apiKey=09325b95264143aebd92e4c7eabcc1bf"
          alt=""
          className="object-contain grow mt-4 w-full aspect-[1.07] max-md:mt-10 max-md:max-w-full"
        />
      </div>
    </div>
  );
}
export default AnalysisESGScoreCard;