import React, { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosArrowRoundUp } from "react-icons/io";
import SaleCard from "../components/SaleCard";
import { earningData } from "../data/dummy";

import RevenueCard from "../components/RevenueCard";
import { chartData, revenueData } from "../data/dummy.jsx";
import Area from "./Charts/Area.jsx";
import { useStateContext } from "../contexts/ContextProvider.jsx";

const Sales = () => {
  const { activeMenu } = useStateContext();
  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-10 ">
      {/* sales board title  */}
      <div>
        {/* title */}
        <h1 className="text-xl font-semibold font-inter">Sales Dashboard</h1>
      </div>
      <div className="flex flex-wrap justify-between mt-4">
        <div>
          {/* all info  */}
          {earningData.map((data) => (
            <div className="sale">
              <SaleCard
                title={data.title}
                total={data.amount}
                percentage={data.percentage}
                icon={data.icon}
                iconColor={data.iconColor}
                iconBg={data.iconBg}
                pcColor={data.pcColor}
                revIcon={data.revIcon}
                rColor={data.rColor}
              />
            </div>
          ))}
        </div>
        {/* Revenue update  */}

        <div
          className={`${
            activeMenu ? "w-[800px]" : "w-[1000px]"
          } h-[500px]  bg-white p-8 rounded-md mb-6 font`}
        >
          {/* Heading Section  */}
          <h1 className="text-lg font-semibold mb-6 border-b-1 pb-2">
            Average Sales Revenue
          </h1>

          {/*revenue overview section  */}
          <div className="flex flex-wrap justify-around items-center mb-4 font-inter">
            {revenueData.map((revData) => (
              <RevenueCard
                title={revData.title}
                amount={revData.amount}
                status={revData.activeCard}
              />
            ))}
          </div>

          {/* chart section  */}
          <Area chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Sales;
