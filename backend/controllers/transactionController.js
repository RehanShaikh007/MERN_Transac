import Transaction from "../models/schema.js";

const getTransactions = async (req, res) => {
  const { month, page = 1, perPage = 10, search = "" } = req.query;
  const validMonths = [
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
  ];
  if (!validMonths.includes(month)) {
    return res.status(400).json({ error: "Invalid month value" });
  }

  const monthNumber = new Date(`2023-${month}-01`).getMonth() + 1;

  const query = {
    $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
  };

  if (search) {
    const searchConditions = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];

    const searchNumber = parseFloat(search);
    if (!isNaN(searchNumber)) {
      searchConditions.push({ price: searchNumber });
    }

    query.$or = searchConditions;
  }

  try {
    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);
    const total = await Transaction.countDocuments(query);
    res.json({ transactions, total });
  } catch (err) {
    console.error("Error fetching transactions:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getTransactions;
