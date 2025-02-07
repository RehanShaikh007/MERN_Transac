import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ month }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchPieChartData();
      }, [month]);
    
      const fetchPieChartData = async () => {
        const response = await axios.get(`http://localhost:4000/api/pie-chart`, {
          params: { month },
        });
        setData(response.data);
      };
    
      const chartData = {
        labels: data.map((d) => d._id),
        datasets: [
          {
            label: "Number of Items",
            data: data.map((d) => d.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
            ],
          },
        ],
      };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Pie Chart</h2>
      <div className="mt-2">
        <Pie data={chartData} />
      </div>
    </div>
  )
}

export default PieChart
