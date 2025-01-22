export function CompanyHomePageBadgesCard() {
    const badges = [
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/34205a668a6a038b2d4e85c74f997a97ecfb38e59e2f258f959b09746c28c5df?placeholderIfAbsent=true&apiKey=09325b95264143aebd92e4c7eabcc1bf",
        alt: "Achievement badge 1",
      },
      {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/506635f846bade7cd0c6be7b4872f54d59f4e632c333c2233566e5df1509cd98?placeholderIfAbsent=true&apiKey=09325b95264143aebd92e4c7eabcc1bf",
        alt: "Achievement badge 2",
      },
    ];
    
    return (
      <div className="flex flex-col items-center w-[350px] h-[350px] bg-emerald-50 rounded-2xl shadow-[9px_9px_4px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col items-center justify-center w-full h-full px-5">
          <div className="text-3xl font-semibold text-black text-center mb-5">Badges:</div>
          <div className="flex gap-5 justify-center items-center">
            {badges.map((badge, index) => (
              <img
                key={index}
                loading="lazy"
                src={badge.src}
                alt={badge.alt}
                className="w-[120px] h-[120px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }