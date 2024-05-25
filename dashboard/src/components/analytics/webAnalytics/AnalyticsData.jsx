import React from "react";

const AnalyticsData = () => {
  return (
    <div className="flex flex-wrap mt-4 items-center justify-between">
      <div className="w-[130px] flex flex-wrap  items-center">
        <h2 className="px-2 py-1 text-sm font-medium rounded-md  text-[#fff] bg-[#6258CC]">
          12h
        </h2>
        <p className="text-[#fff] ml-2">Direct</p>
      </div>
      <div className="w-[130px] flex flex-wrap  items-center">
        <h2 className="px-2 py-1 text-sm font-medium rounded-md  text-[#fff] bg-[#6258CC]">
          890
        </h2>
        <p className="text-[#fff] ml-2">Organic</p>
      </div>
    </div>
  );
};

export default AnalyticsData;
