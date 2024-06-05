import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";

import WebCardAnalytics from "../../components/analytics/webAnalytics/WebCardAnalytics.jsx";
import SalesOverview from "../../components/analytics/webAnalytics/SalesOverview.jsx";
import Revenue from "../../components/analytics/webAnalytics/Revenue.jsx";
import { Card } from "keep-react";
import { BarChart } from "keep-react";
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
    name: "20",
    price: 390,
    sell: 110,
  },
  {
    name: "22",
    price: 220,
    sell: 90,
  },
  {
    name: "24",
    price: 360,
    sell: 170,
  },
  {
    name: "26",
    price: 410,
    sell: 140,
  },
  {
    name: "28",
    price: 280,
    sell: 200,
  },
  {
    name: "30",
    price: 330,
    sell: 160,
  },
];
const Analytics = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-10 font-public">
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
      <div className="flex flex-wrap ">
        <div className="w-[600px] h-auto bg-white p-4 rounded-md">
          <div>
            <h2 className="text-lg font-medium ">Earning Reports</h2>
            <p className="text-sm font-normal">Weekly Earning Overview</p>
          </div>
          <div className="flex flex-wrap w-full justify-between ">
            <div className="w-[40%] h-auto mt-auto">
              <h2 className="font-medium text-4xl">$256</h2>
              <p className="text-sm ">
                You informed of this week compared to last week
              </p>
            </div>
            <div className="w-[60%] h-auto">
              <BarChart
                height={200}
                width={350}
                dataKey="price"
                chartData={BarChartData}
                barRadius={[4, 4, 0, 0]}
                active={true}
                activeIndex={5}
                activeColor="#1B4DFF"
                inActiveColor="#94ABFF"
              />
            </div>
          </div>
          <div className="border-1 border-cyan-100 rounded-md">
            <div>
              <div>
                {/* icon  */}
                <h2>Earnings</h2>
              </div>
              <h2>$3422</h2>
              {/* here is a line  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
