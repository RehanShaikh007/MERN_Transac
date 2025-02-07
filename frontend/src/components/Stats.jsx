import React, { useEffect, useState } from "react";
import axios from "axios";

const Stats = ({ month }) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetchStats();
  }, [month]);

  const fetchStats = async () => {
    const response = await axios.get(`http://localhost:4000/api/stats`, {
      params: { month },
    });
    setStats(response.data);
  };
  return (
    <div className="mt-15">
      <h2 className="text-2xl font-bold uppercase text-center bg-gradient-to-t to-red-900 p-2 text-white">
        Statistics
      </h2>
      <div className="flex gap-4 mt-8 items-center justify-center">
        <div className="p-4 rounded-2xl text-white font-semibold bg-red-900 hover:scale-105">
          <p>Total Sale Amount: {stats.totalSaleAmount}</p>
        </div>
        <div className="p-4 rounded-2xl text-white font-semibold bg-red-900 hover:scale-105">
          <p>Total Sold Items: {stats.totalSoldItems}</p>
        </div>
        <div className="p-4 rounded-2xl text-white font-semibold bg-red-900 hover:scale-105">
          <p>Total Not Sold Items: {stats.totalNotSoldItems}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
