import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    
    {
      label: 'Dataset 2',
      data: labels.map(() => Math.floor(Math.random() * 1000)), // Thay faker bằng dữ liệu ngẫu nhiên từ 0 đến 1000
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = () => {
    return <Bar options={options} data={data} />;
}

export default Chart;
