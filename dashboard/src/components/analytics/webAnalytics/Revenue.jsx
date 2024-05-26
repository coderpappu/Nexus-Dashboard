import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { BsCalendarEvent } from "react-icons/bs";
const chartData = [
  { name: "1", price: 0, sell: 0 },
  { name: "2", price: 60, sell: 200 },
  { name: "3", price: 10, sell: 120 },
  { name: "4", price: 90, sell: 130 },
  { name: "5", price: 10, sell: 120 },
  { name: "6", price: 20, sell: 120 },
];

const Revenue = () => {
  return (
    <>
      <div className="px-4 pt-4">
        <div className="w-9 h-9 rounded-full bg-[#DFF7E9] p-2 text-center">
          <BsCalendarEvent className="text-[#35CA78] ml-[2px] mt-[0.5px]" />
        </div>

        <h1 className="text-xl font-medium mt-2">97.5k</h1>
        <p className="text-xs text-[#a5a3ae]">Revenue Generated</p>
      </div>

      <div className="w-[360px] h-[150px]">
        <ResponsiveContainer width="100%" height="100%" className="">
          <AreaChart data={chartData}>
            {/* <Tooltip /> */}
            <Area
              type="monotone"
              dataKey="price"
              stroke="#28C76F"
              fill="#D3F4E2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Revenue;
