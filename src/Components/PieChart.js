import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {

    const data = {
        datasets: [
          {
            label: '# of Votes',
            data: [55, 31, 14],
            backgroundColor: [
              'rgba(152, 216, 158, 1)',
              'rgba(238, 132, 132, 1)',
              'rgba(246, 220, 125, 1)',
            ],
            borderColor: [
                'rgba(152, 216, 158, 1)',
                'rgba(238, 132, 132, 1)',
                'rgba(246, 220, 125, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        width: 150,
        height: 150,
      };

    return (
        <div style={{width : "130px", height: "130px"}}>
            <Pie options={options} data={data} />
        </div>
    )
}

export default PieChart;