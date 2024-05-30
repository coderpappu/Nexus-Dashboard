import React from "react";
import CardImg from "../../../data/card-website-analytics-1.png";
import CardHead from "./CardHead";
import AnalyticsData from "./AnalyticsData.jsx";
import autoPlay from "embla-carousel-autoplay";
import { Carousel } from "keep-react";

const webData = [
  {
    title: "Spending",
    data1: { title: "Spend", num: "12h" },
    data2: { title: "Oder Size", num: "18" },
    data3: { title: "Order", num: "127" },
    data4: { title: "Items", num: "2.2k" },
  },
  {
    title: "Traffic",
    data1: { title: "Sessions", num: "2.8%" },
    data2: { title: "Page Views", num: "3.1k" },
    data3: { title: "Leads", num: "1.2k" },
    data4: { title: "Conversation", num: "12%" },
  },
  {
    title: "Revenue Sources",
    data1: { title: "Direct", num: 268 },
    data2: { title: "Organic", num: "830" },
    data3: { title: "Refferal", num: "62" },
    data4: { title: "Campaign", num: "1.2k" },
  },
];

const WebCardAnalytics = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
      <Carousel.Slides>
        {webData.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="md:h-[250px] rounded-md p-4 bg-[#7367F0] flex flex-wrap justify-between items-center">
              {/* Web Analytics left */}
              <div className="w-full md:w-[60%] h-full">
                {/* Analytics Heading and para */}
                <CardHead title={item.title} />
                {/* Analytics Data Show section */}
                <div className="w-full mt-2">
                  <AnalyticsData data1={item.data1} data2={item.data2} />
                  <AnalyticsData data1={item.data3} data2={item.data4} />
                </div>
              </div>
              {/* Web Analytics right */}
              <div className="md:w-[40%]  lg:w-[33%] xl:w-[40%] h-full p-2 flex justify-center items-center">
                <img
                  src={CardImg}
                  alt="card_image"
                  className="w-[85%] h-auto"
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel.Slides>
    </Carousel>
  );
};

export default WebCardAnalytics;
