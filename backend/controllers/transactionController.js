import Transaction from "../models/schema.js";

const getTransactions = async (req, res) => {
  const { month, page = 1, perPage = 10, search = "" } = req.query;
  console.log("Query Params:", { month, page, perPage, search });
  const monthNumber = new Date(`2023-${month}-01`).getMonth() + 1;
  console.log("Month Number:", monthNumber);

  const query = {
    $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
    $or: [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { price: { $regex: search, $options: "i" } },
    ],
  };
  console.log("Query:", query);

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
    const total = await Transaction.countDocuments(query);
    res.json({ transactions, total });
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ error: err.message });
  }
};

export default getTransactions;