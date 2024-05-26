import React from "react";
import { LineProgress } from "keep-react";
import { FiShoppingCart } from "react-icons/fi";
import { RiLinkM } from "react-icons/ri";

const SalesOverview = () => {
  return (
    <>
      {/* Sale rate and ammount  */}
      <div className="flex flex-wrap justify-between ">
        <div>
          <p className="text-xs text-[#a5a3ae]">Sales Overview</p>
          <h1 className="text-xl font-medium">$42.5k</h1>
        </div>
        <div>
          <h1 className="text-[#28C76F] text-sm font-medium">+18.2%</h1>
        </div>
      </div>

      {/* oder and visit section  */}
      <div className="flex flex-wrap justify-between mt-6 ">
        <div className="">
          {/* icon  */}
          <div className="flex flex-wrap items-center">
            <FiShoppingCart className="text-[#32D8ED] p-1 text-2xl rounded-sm bg-[#D9F8FC] mr-2" />
            <p className="text-sm  text-left text-[#C1BFC7]">Order</p>
          </div>

          <h1 className="text-base mt-3 text-[#5d596c]">62.2%</h1>
          <p className="text-xs text-[#a5a3ae] mt-1">6,440</p>
        </div>
        {/* vs line  */}
        <div className="flex flex-col flex-wrap items-center justify-center align-middle">
          <div className="w-[1px] h-[20px] bg-[#F2F2F3]"></div>
          <h2 className="w-6 h-6 text-[12px] pt-1 text-center rounded-full bg-[#F2F2F3] text-[#C1BFC7] my-2">
            VS
          </h2>
          <div className="w-[1px] h-[20px] bg-[#F2F2F3] "></div>
        </div>
        <div className="text-right ">
          {/* icon  */}
          <div className="flex flex-row-reverse flex-wrap  items-center">
            <RiLinkM className="text-[#32D8ED] p-1 text-2xl rounded-sm bg-[#D9F8FC] ml-2" />
            <p className="text-sm text-left text-[#C1BFC7]">Visits</p>
          </div>

          <h1 className="text-base mt-3 text-right text-[#5d596c]">25.5%</h1>
          <p className="text-xs text-[#a5a3ae] mt-1">12,759</p>
        </div>
      </div>
      <div className="mt-6 w-full">
        <LineProgress
          progress={62.2}
          strokeBgColor="red"
          className="w-[250px] bg-[#7367F0]"
        ></LineProgress>
      </div>
    </>
  );
};

export default SalesOverview;
