import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";

import WebCardAnalytics from "../../components/analytics/webAnalytics/WebCardAnalytics.jsx";
import SalesOverview from "../../components/analytics/webAnalytics/SalesOverview.jsx";
import Revenue from "../../components/analytics/webAnalytics/Revenue.jsx";

const Analytics = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-10 font-public">
      {/* First row */}
      <div className="flex flex-wrap justify-around w-full overflow-hidden relative">
        {/* Website analytics */}
        <div className="w-[320px] md:w-[700px] lg:w-[900px] xl:w-[560px] 2xl:w-[700px] my-2 ">
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
    </div>
  );
};

export default Analytics;
