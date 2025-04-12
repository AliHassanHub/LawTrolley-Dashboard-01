import React, { useState } from "react";

const tabs = ["Product", "Event", "Talent"];

export const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Product");

  return (
    <div className="self-stretch flex min-w-60 flex-col items-stretch text-xl text-[#808080] font-medium tracking-[-0.4px] leading-[1.3] w-[394px] my-auto">
      <div className="flex items-center gap-[40px_64px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`self-stretch gap-2.5 px-2.5 py-2 ${
              activeTab === tab
                ? "border-b-[color:var(--Foundation-Purple-Normal,#6B047C)] text-[#6B047C] border-b-2 border-solid font-bold"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border bg-[#F2F2F2] min-h-px w-full border-[rgba(242,242,242,1)] border-solid" />
    </div>
  );
};
