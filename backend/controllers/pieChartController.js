import Transaction from "../models/schema.js";

const getPieChartData = async (req, res) => {
  const { month } = req.query;
  const monthNumber = new Date(`2023-${month}-01`).getMonth() + 1;

  try {
    const data = await Transaction.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
        },
      },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getPieChartData;
