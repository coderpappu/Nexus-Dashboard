import React from "react";

const AnalyticsData = ({ data1, data2 }) => {
  return (
    <div className="flex flex-wrap mt-4 items-center justify-between">
      <div className="w-[150px] flex flex-wrap  items-cente mb-3">
        <h2 className="px-2 py-1 text-sm font-medium rounded-md  text-[#fff] bg-[#6258CC]">
          {data1.num}
        </h2>
        <p className="text-[#fff] ml-2">{data1.title}</p>
      </div>
      <div className="w-[150px] flex flex-wrap  items-center">
        <h2 className="px-2 py-1 text-sm font-medium rounded-md  text-[#fff] bg-[#6258CC]">
          {data2.num}
        </h2>
        <p className="text-[#fff] ml-2">{data2.title}</p>
      </div>
    </div>
  );
};

export default AnalyticsData;
