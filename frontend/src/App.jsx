import React, { useState } from "react";
import TransactionsTable from "./components/TransactionsTable";
import Stats from "./components/Stats";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

const App = () => {
  const [month, setMonth] = useState("March");
  return (
    <div className="p-4 bg-fuchsia-100">
      <h1 className="text-2xl text-center bg-gradient-to-t from p-2 text-white to-red-800 font-bold uppercase mb-4">
        Transaction Dashboard
      </h1>
      <select
        value={month}
        onChange={(e) => setMonth(e.target.value)}
        className="p-2 rounded-2xl cursor-pointer border-red-400 bg-red-900 text-white font-semibold"
      >
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((m) => (
          <option key={m} value={m} className="hover:text-red-500">
            {m}
          </option>
        ))}
      </select>

      <TransactionsTable month={month} />
      <Stats month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  );
};

export default App;
