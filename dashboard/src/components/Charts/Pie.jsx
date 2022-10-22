import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PieData } from '../../data/dummy';

const Pie = () => {
  return (
    <AccumulationChartComponent
      id='pie-chart'

    >
      <AccumulationSeriesDirective>
        <AccumulationSeriesDirective dataSource={PieData} xName="x" yName='y' innerRadius='40%'>

        </AccumulationSeriesDirective>
      </AccumulationSeriesDirective>

    </AccumulationChartComponent>
  )
}

export default Pie