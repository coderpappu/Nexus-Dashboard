import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import CardImg from "../../data/card-website-analytics-1.png";
import CardHead from "../../components/analytics/webAnalytics/CardHead.jsx";
import AnalyticsData from "../../components/analytics/webAnalytics/AnalyticsData.jsx";
const Analytics = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-10 font-public">
      {/* first row  */}
      <div className="flex flex-wrap ">
        {/* website analytics  */}
        <div className="w-[500px] h-[250px] rounded-md p-4 bg-[#7367F0] flex flex-wrap ">
          {/* web Analytics left  */}
          <div className="w-[60%]">
            {/* Analytics Heading and para  */}
            <CardHead />
            {/* Analytics Data Show section  */}
            <div className="w-full mt-2">
              <AnalyticsData />
              <AnalyticsData />
            </div>
          </div>
          {/* Web analytics right  */}
          <div className="w-[40%] p-4">
            <img src={CardImg} alt="card_image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
