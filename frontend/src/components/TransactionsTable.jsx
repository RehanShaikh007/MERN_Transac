import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsTable = ({ month }) => {
    const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTransactions();
  }, [month, page, search]);

  const fetchTransactions = async () => {
    const response = await axios.get(`http://localhost:4000/api/transactions`, {
      params: { month, page, search },
    });
    setTransactions(response.data.transactions);
    setTotal(response.data.total);
  };

  return (
    <div className="mt-4">
    <input
      type="text"
      placeholder="Search transactions"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 border rounded"
    />
    <table className="w-full mt-2 border-collapse border">
      <thead>
        <tr>
          <th className="border p-2">Title</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td className="border p-2">{t.title}</td>
            <td className="border p-2">{t.description}</td>
            <td className="border p-2">{t.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-2">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Previous
      </button>
      <span className="mx-2">
        Page {page} of {Math.ceil(total / 10)}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page === Math.ceil(total / 10)}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  </div>
  )
}

export default TransactionsTable
