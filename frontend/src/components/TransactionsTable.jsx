import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div className="mt-4 w-full p-4">
      <input
        type="text"
        placeholder="Search transactions"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 bg-red-900 text-white font-semibold rounded-2xl text-center w-full md:w-1/2 lg:w-1/3 mx-auto block"
      />

      <div className="mt-2 overflow-x-auto">
        <table className="w-full border-collapse border-4 border-red-900 bg-white">
          <thead>
            <tr className="border-2 bg-red-900">
              <th className="border p-2 text-white">ID</th>
              <th className="border p-2 text-white">Title</th>
              <th className="border p-2 text-white">Description</th>
              <th className="border p-2 text-white">Price</th>
              <th className="border p-2 text-white">Category</th>
              <th className="border p-2 text-white">Sold</th>
              <th className="border p-2 text-white">Image</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-2 border-red-900">
                <td className="border p-2 text-red-900">{t.id}</td>
                <td className="border p-2 text-red-900">{t.title}</td>
                <td className="border p-2 text-red-900">{t.description}</td>
                <td className="border p-2 text-red-900">{t.price}</td>
                <td className="border p-2 text-red-900">{t.category}</td>
                <td className="border p-2">
                  {t.sold ? (
                    <span className="text-green-600 font-semibold">Sold</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Sold</span>
                  )}
                </td>
                <td className="border p-2">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 flex justify-center items-center w-full">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="p-2 bg-red-900 cursor-pointer text-white rounded font-medium mx-1"
        >
          Previous
        </button>
        <span className="mx-2 text-red-900 font-medium">
          Page {page} of {Math.ceil(total / 10)}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(total / 10)}
          className="p-2 bg-red-900 cursor-pointer text-white rounded font-medium mx-1"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionsTable;
