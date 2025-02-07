import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ month }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBarChartData();
  }, [month]);

  const fetchBarChartData = async () => {
    const response = await axios.get(`http://localhost:4000/api/bar-chart`, {
      params: { month },
    });
    setData(response.data);
  };

  const chartData = {
    labels: data.map((d) => d.range),
    datasets: [
      {
        label: "Number of Items",
        data: data.map((d) => d.count),
        backgroundColor: "rgb(148, 55, 60)",
      },
    ],
  };

  return (
    <div className="mt-15">
      <h2 className="text-2xl font-bold uppercase bg-gradient-to-t to-red-900 p-2 text-center text-white">
        Bar Chart
      </h2>
      <div className="mt-8">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;
