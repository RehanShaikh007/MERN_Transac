import React, { useState } from 'react'
import TransactionsTable from './components/TransactionsTable';
import Stats from './components/Stats';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

const App = () => {
  const [month, setMonth] = useState("March");
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Dashboard</h1>
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="p-2 border rounded"
      >
        {[
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ].map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <TransactionsTable month={month} />
      <Stats month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  )
}

export default App
