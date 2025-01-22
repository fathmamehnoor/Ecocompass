export function CompanyHomePageScoreCard() {
    return (
      <div className="flex flex-col items-center w-[350px] h-[350px] bg-emerald-50 rounded-2xl shadow-[9px_9px_4px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center justify-center px-6 pt-5 w-full h-full"> 
          {/* Text */}
          <div className="text-3xl font-semibold text-black text-center">Current ESG Score:</div> 
          {/* Number with increased margin */}
          <div className="text-9xl font-bold text-green-700 mt-7">8.5</div>
        </div>
      </div>
    );
  }
  