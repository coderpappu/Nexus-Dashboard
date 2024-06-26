import React from "react";

const CardHead = ({ title }) => {
  return (
    <>
      <h2 className="text-lg lg:text-xl pt-2 font-medium text-[white]">
        Website Analytics
      </h2>
      <p className="text-xs font-medium mt-1 text-[white] ">
        Total 25.5% Coversion Rate
      </p>

      <h1 className="text-sm mt-6 text-[#fff] font-semibold ">{title}</h1>
    </>
  );
};

export default CardHead;
