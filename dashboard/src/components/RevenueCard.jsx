import React, { useState } from "react";

const RevenueCard = ({ title, amount, status }) => {
  // Alert problem
  // here is a problem . my target is when i click a button this time another button will change the bg color and also clicked button bg this time shadow type . now this is not work .
  const [activeCard, setActiveCard] = useState(status);

  return (
    <div
      className={`w-[45%]  h-40 mx-4 p-8 rounded-md ${
        activeCard ? "bg-[#f9f9ff]" : "bg-white"
      } `}
      onClick={() => setActiveCard(!activeCard)}
    >
      <h1 className="text-lg font-medium  text-[#868eae]">{title}</h1>
      <p className="text-2xl font-semibold mt-3 font-inter">$ {amount}</p>
    </div>
  );
};

export default RevenueCard;
