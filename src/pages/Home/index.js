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


function Home (){
    const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: 'Statistik Pasien dan Pemeriksaan',
          },
        },
        scales: {
         
        },
      };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Jumlah Pasien',
            data: [3, 3, 2, 8, 2, 3, 4],
            borderColor: 'rgba(53, 162, 235, 0.5)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [4, 4, 4, 0, 10, 5, 4],
            borderColor: '#000000',
            backgroundColor: '#000000',
          },
        ],
      };

    return (
        <div className="min-h-screen p-8">
            <div className='w-1/2'>
                <Line options={options} data={data} />
            </div>
            
        </div>
    )
}

export default Home;