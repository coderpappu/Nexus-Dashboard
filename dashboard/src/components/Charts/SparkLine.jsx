
import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ( {id, height , color, width, data, type, currentColor}) => {
  return (
    <div>
      <SparklineComponent  id={id} height ={height} width = {width} lineWidth= {1} valueType = {'Numeric'} fill={color} border = {{width : 2 ,color :currentColor} } dataSource={data}
        xName="x"
        yName="yval"
        type={type}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        > 
        
         <Inject services={[SparklineTooltip]} />
      
        
      </SparklineComponent> 
    </div>
  )
}

export default SparkLine