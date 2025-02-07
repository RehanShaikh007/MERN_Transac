import Transaction from "../models/schema.js";


const getBarChartData = async (req, res) => {
  const { month } = req.query;
  const monthNumber = new Date(`2023-${month}-01`).getMonth() + 1;

  const ranges = [
    { min: 0, max: 100 },
    { min: 101, max: 200 },
    { min: 201, max: 300 },
    { min: 301, max: 400 },
    { min: 401, max: 500 },
    { min: 501, max: 600 },
    { min: 601, max: 700 },
    { min: 701, max: 800 },
    { min: 801, max: 900 },
    { min: 901, max: Infinity },
  ];

  try {
    const data = await Promise.all(
      ranges.map(async (range) => {
        const count = await Transaction.countDocuments({
          $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
          price: { $gte: range.min, $lte: range.max },
        });
        return { range: `${range.min}-${range.max}`, count };
      })
    );
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getBarChartData;