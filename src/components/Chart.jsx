import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title,ArcElement, Tooltip, Legend);


const Chart = ({ arr = [], days, currency }) => {
    const prices=[];
    const date=[];

    for (let i = 0; i < arr.length; i++) {
        const dateObj = new Date(arr[i][0]);
        if (days === '24h') {
          date.push(dateObj.toLocaleTimeString());
        } else {
          date.push(dateObj.toLocaleDateString());
        }
        prices.push(arr[i][1]);
    }

    const data = {
        labels: date,
        datasets: [
          {
            label: `Price in ${currency}`,
            data: prices,
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.9)",
          },
        ],
      };

    return (
        <Line
          key={`${days}-${currency}`}
          options={{
            responsive: true,
          }}
          data={data}
        />
    );
}

export default Chart
