import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

function BarChartAnalysis() {
  return (
    <BarChart
      series={[
        { data: [35,45,55,65] },
        
      ]}
      height={490}
      xAxis={[{ data: ['Q1','Q2','Q3','Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}

export default BarChartAnalysis;