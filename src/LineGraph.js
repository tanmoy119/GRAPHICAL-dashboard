import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
//   plugins: {
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart - Multi Axis',
//     },
//   },
  scales: {
    y: {
      type: 'linear' ,
      display: true,
      position: 'left',
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
     // label: 'Dataset 1',
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: false ,
      data:  [860,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
    },
  ],
};

function LineGraph() {
  return (
<Line options={options} data={data}/>
  )
}

export default LineGraph;