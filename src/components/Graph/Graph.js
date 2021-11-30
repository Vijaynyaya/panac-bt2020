import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js'; 

Chart.register(...registerables);

const Graph = ({ data: { status, message, cases, deaths} }) => {
    if (!cases && status) {
        return <div>loading...</div> 
    }
    if (!status) {
      return <h2 style={{color: 'black', fontSize: '2em'}}>{message}</h2> 
    }

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Total number of deaths and cases (data for last 30 days)',
          },
        },
      };

    const labels = Object.keys(cases);

    const data = {
    labels,
    datasets: [
        {
        label: 'Cases',
        data: Object.keys(cases).map(key => cases[key]),
        borderColor: '#FF7722',
        backgroundColor: '#CC6600',
        },
        {
        label: 'Deaths  ',
        data: Object.keys(deaths).map(key => deaths[key]),
        borderColor: '#736AFF',
        backgroundColor: '#4E5180',
        },
    ],
    };
    
    return <Line options={options} data={data} />
}

export default Graph;