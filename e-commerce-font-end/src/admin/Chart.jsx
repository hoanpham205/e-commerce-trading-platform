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
import { Col, Container, Row } from 'react-bootstrap';
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
      text: 'Shop HT',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    
    {
      label: 'revenue',
      data: labels.map(() => Math.floor(Math.random() * 1000)), // Thay faker bằng dữ liệu ngẫu nhiên từ 0 đến 1000
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = () => {
    return(
      <section>
        <Container>
          <Row>
            <Col lg ='12'>
              <Bar options={options} data={data} />;
            </Col>
          </Row>
        </Container>
      </section>
    ) 
}

export default Chart;
