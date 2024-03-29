import React from "react";

const Sales = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10">
      {/* sales board title  */}
      <div>
        {/* title */}
        <h1 className="text-xl font-semibold">Sales Dashboard</h1>
      </div>
      <div>
        {/* all info  */}
        <div className="sale">
          <i class="icofont-people"></i>
          <div className="w-52 h-auto bg-white">
            <div>{/* icon  */}</div>
            <div>
              <h1 className="text-xl">7821</h1>
              <p>New Customer</p>
              <div>
                {/* icon */}
                24% Since last week
              </div>
            </div>
          </div>
        </div>
        {/* Revenue update  */}
        <div className="overview"></div>
      </div>
    </div>
  );
};

export default Sales;
