import React from "react";

export const SearchBanner = () => {
  return (
    <div className="relative bg-[#6B047C] w-full rounded-[1rem] overflow-hidden px-4 sm:px-8 py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between">
      {/* Text and Button */}
      <div className="z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-left">
        <h2 className="text-white text-2xl sm:text-[28px] font-semibold leading-tight max-w-[300px] sm:max-w-[400px]">
          Search thousands of legal services and products
        </h2>
        <button className="bg-white hover:bg-gray-100 text-[#6B047C] font-medium text-base sm:text-lg px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
          Get started now
        </button>
      </div>

      {/* Gift Images */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-end pr-4 sm:pr-8">
        <img
          src="/image 20.png"
          alt="Background gift decoration"
          className="w-[110px] sm:w-[160px] md:w-[180px] opacity-60 absolute right-[120px] sm:right-[180px] top-1/2 -translate-y-1/2"
        />
        <img
          src="/image 21.png"
          alt="Foreground gift box"
          className="w-[140px] sm:w-[200px] md:w-[220px] relative z-10"
        />
      </div>
    </div>
  );
};
