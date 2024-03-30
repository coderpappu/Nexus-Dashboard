import React from "react";
import { AreaChart } from "keep-react";

const Area = ({ chartData }) => {
  return (
    <AreaChart
      chartData={chartData}
      dataKey="price"
      chartType="natural"
      secondaryDataKey="sell"
      showTooltip={true}
      showXaxis={true}
      showYaxis={true}
      showGridLine={true}
    />
  );
};

export default Area;
