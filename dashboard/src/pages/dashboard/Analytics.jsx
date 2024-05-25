import React from "react";
import { useStateContext } from "../../contexts/ContextProvider.jsx";
import CardImg from "../../data/card-website-analytics-1.png";
import CardHead from "../../components/analytics/webAnalytics/CardHead.jsx";
import AnalyticsData from "../../components/analytics/webAnalytics/AnalyticsData.jsx";
// import autoPlay from "embla-carousel-autoplay";
import { Carousel } from "keep-react";

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

        {/* SLIDER CHECK  */}
        <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
          <Carousel.Slides>
            {Array.from({ length: 5 }).map((_, index) => (
              <Carousel.Item key={index}>
                <div className="flex items-center justify-center rounded-xl border border-metal-100 bg-primary-25 p-20">
                  <h1 className="text-heading-1 font-medium text-metal-900">
                    {index + 1}
                  </h1>
                </div>
              </Carousel.Item>
            ))}
          </Carousel.Slides>
          <Carousel.Control>
            <Carousel.Buttons>
              <Carousel.PrevButton />
              <Carousel.NextButton />
            </Carousel.Buttons>
            <Carousel.Indicators />
          </Carousel.Control>
        </Carousel>
      </div>
    </div>
  );
};

export default Analytics;
