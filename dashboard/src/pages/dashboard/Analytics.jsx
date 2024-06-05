import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";

import WebCardAnalytics from "../../components/analytics/webAnalytics/WebCardAnalytics.jsx";
import SalesOverview from "../../components/analytics/webAnalytics/SalesOverview.jsx";
import Revenue from "../../components/analytics/webAnalytics/Revenue.jsx";
import { Card } from "keep-react";
import { BarChart } from "keep-react";
import { FiDollarSign, FiPieChart } from "react-icons/fi";
import { RiPaypalLine } from "react-icons/ri";

import { LineProgress } from "keep-react";

const BarChartData = [
  {
    name: "2",
    price: 340,
    sell: 140,
  },
  {
    name: "4",
    price: 300,
    sell: 200,
  },
  {
    name: "6",
    price: 170,
    sell: 120,
  },

  {
    name: "14",
    price: 250,
    sell: 180,
  },
  {
    name: "16",
    price: 320,
    sell: 150,
  },
  {
    name: "18",
    price: 280,
    sell: 160,
  },
  {
    name: "18",
    price: 280,
    sell: 160,
  },
];
const Analytics = () => {
  const { activeMenu } = useStateContext();

  return (
    <div
      className={`m-2 md:m-0 mt-24 p-2 md:p-10 font-public ${
        !activeMenu && "xl:w-[1530px] xl:m-auto"
      }`}
    >
      {/* First row */}
      <div className="flex flex-wrap justify-around w-full overflow-hidden relative">
        {/* Website analytics */}
        <div className="w-[320px] md:w-[700px] lg:w-[900px] xl:w-[560px] 2xl:w-[600px] my-2 ">
          <WebCardAnalytics />
        </div>

        {/* Sales And overview Section  */}
        <div className="w-[300px] md:w-[320px] lg:w-[400px] xl:w-[250px] 2xl:w-[400px] h-[250px] bg-white p-8 my-2 rounded-sm ">
          <SalesOverview />
        </div>

        {/* Sale and revenue overview */}
        <div className="w-[300px]  md:w-[320px] lg:w-[400px] xl:w-[250px]  2xl:w-[400px] h-[250px] overflow-hidden my-2 bg-white   rounded-sm ">
          <Revenue />
        </div>
      </div>

      {/* 2nd row  */}
      <div className="flex flex-wrap my-5">
        <div className="w-[600px] h-auto bg-white p-4 rounded-md">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-medium text-[#5D596C]">
              Earning Reports
            </h2>
            <p className="text-sm font-normal text-[#A5A3AE]">
              Weekly Earning Overview
            </p>
          </div>
          <div className="flex flex-wrap w-full justify-between ">
            <div className="w-full md:w-[40%] h-auto mb-5 md:mb-0 mt-auto ">
              <div className="flex flex-wrap items-center mb-4">
                <h2 className="font-medium text-4xl  text-[#5D596C]">$256</h2>

                <div className="w-16 h-6 bg-[#DFF7E9] text-[#43CE81] rounded-md text-center text-[13px] p-1 ml-2 ">
                  +4.2%
                </div>
              </div>
              <p className="text-sm text-[#777485]">
                You informed of this week compared to last week
              </p>
            </div>
            <div className="w-full md:w-[60%] ">
              <BarChart
                height={200}
                width={350}
                dataKey="price"
                chartData={BarChartData}
                barRadius={[4, 4, 0, 0]}
                active={true}
                activeIndex={5}
                activeColor="#6D64BC"
                inActiveColor="#EFEFFF"
              />
            </div>
          </div>
          <div className="border-1 border-[#DBDADE] rounded-md flex flex-wrap mt-6">
            <div className="w-full md:w-[33%] p-4">
              <div className="flex flex-wrap items-center mb-2">
                {/* icon  */}
                <div className="w-6 h-6  bg-[#EAE8FD] rounded-sm ">
                  <FiDollarSign className="text-md m-auto mt-1 text-[#786DF1]" />
                </div>
                <h2 className="ml-2 text-[#5F5B6E]">Earnings</h2>
              </div>
              <h2 className="text-2xl mb-2 text-[#5D596C]">$342.67</h2>
              <LineProgress
                progress={62.2}
                strokeBgColor="red"
                size="sm"
                className=" bg-[#7367F0]"
              ></LineProgress>
              {/* here is a line  */}
            </div>

            <div className="w-full md:w-[33%] p-4">
              <div className="flex flex-wrap items-center mb-2">
                {/* icon  */}
                <div className="w-6 h-6  bg-[#EAE8FD] rounded-sm ">
                  <FiDollarSign className="text-md m-auto mt-1 text-[#786DF1]" />
                </div>
                <h2 className="ml-2">Earnings</h2>
              </div>
              <h2 className="text-2xl mb-2">$342.67</h2>
              <LineProgress
                progress={62.2}
                strokeBgColor="red"
                size="sm"
                className=" bg-[#7367F0]"
              ></LineProgress>
              {/* here is a line  */}
            </div>
            <div className="w-full md:w-[33%] p-4">
              <div className="flex flex-wrap items-center mb-2">
                {/* icon  */}
                <div className="w-6 h-6  bg-[#EAE8FD] rounded-sm ">
                  <FiDollarSign className="text-md m-auto mt-1 text-[#786DF1]" />
                </div>
                <h2 className="ml-2">Earnings</h2>
              </div>
              <h2 className="text-2xl mb-2">$342.67</h2>
              <LineProgress
                progress={62.2}
                strokeBgColor="red"
                size="sm"
                className=" bg-[#7367F0]"
              ></LineProgress>
              {/* here is a line  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
