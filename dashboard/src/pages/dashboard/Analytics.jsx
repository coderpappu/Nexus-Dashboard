import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import CardImg from "../../data/card-website-analytics-1.png";
import CardHead from "../../components/analytics/webAnalytics/CardHead.jsx";
import AnalyticsData from "../../components/analytics/webAnalytics/AnalyticsData.jsx";
import autoPlay from "embla-carousel-autoplay";
import { Carousel } from "keep-react";

const Analytics = () => {
  const { activeMenu } = useStateContext();

  const yourData = [
    { title: "Spending", description: "This is the first slide description." },
    {
      title: "Revenue Sources",
      description: "This is the second slide description.",
    },
    { title: "Traffic", description: "This is the second slide description." },
  ];

  return (
    <div className="m-2 md:m-0 mt-24 p-2 md:p-10 font-public">
      {/* first row  */}
      <div className="flex flex-wrap w-[600px] overflow-hidden relative">
        {/* website analytics  */}

        {/* SLIDER CHECK  */}
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
          <Carousel.Slides>
            {yourData.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="w-[570px] h-[250px] rounded-md p-4 bg-[#7367F0] flex flex-wrap ">
                  {/* web Analytics left  */}
                  <div className="w-[50%]">
                    {/* Analytics Heading and para  */}
                    <CardHead />
                    {/* Analytics Data Show section  */}
                    <div className="w-full mt-2">
                      <AnalyticsData />
                      <AnalyticsData />
                    </div>
                  </div>
                  {/* Web analytics right  */}
                  <div className="w-[50%] p-4">
                    <img
                      src={CardImg}
                      alt="card_image"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.Slides>
        </Carousel>
      </div>
    </div>
  );
};

export default Analytics;
