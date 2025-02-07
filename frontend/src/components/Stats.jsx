import React, { useEffect, useState } from 'react'

const Stats = () => {
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
    <div className="mt-4">
      <h2 className="text-xl font-bold">Statistics</h2>
      <div className="flex gap-4 mt-2">
        <div className="p-4 border rounded">
          <p>Total Sale Amount: {stats.totalSaleAmount}</p>
        </div>
        <div className="p-4 border rounded">
          <p>Total Sold Items: {stats.totalSoldItems}</p>
        </div>
        <div className="p-4 border rounded">
          <p>Total Not Sold Items: {stats.totalNotSoldItems}</p>
        </div>
      </div>
    </div>
  )
}

export default Stats
