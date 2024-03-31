import React, { useState } from "react";

const RevenueCard = ({ title, amount, status }) => {
  // Alert problem
  // here is a problem . my target is when i click a button this time another button will change the bg color and also clicked button bg this time shadow type . now this is not work .
  const [activeCard, setActiveCard] = useState(status);

  return (
    <div
      className={`w-[250px] sm:w-[240px] md:w-[300px] lg:w-[335px]  h-auto  sm:mx-4 mb-2 p-4 sm:p-8 rounded-md ${
        activeCard ? "bg-[#f9f9ff]" : "bg-white"
      } `}
      onClick={() => setActiveCard(!activeCard)}
    >
      <h1 className="text-md sm:text-lg font-medium  text-[#868eae]">
        {title}
      </h1>
      <p className="text-2xl font-semibold mt-3 font-inter">$ {amount}</p>
    </div>
  );
};

export default RevenueCard;
