import Transaction from "../models/schema.js";


const getStats = async (req, res) => {
  const { month } = req.query;
  const monthNumber = new Date(`2023-${month}-01`).getMonth() + 1;

  try {
    const totalSaleAmount = await Transaction.aggregate([
      {
        $match: {
          $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
          sold: true,
        },
      },
      { $group: { _id: null, total: { $sum: "$price" } } },
    ]);

    const totalSoldItems = await Transaction.countDocuments({
      $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
      sold: true,
    });

    const totalNotSoldItems = await Transaction.countDocuments({
      $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
      sold: false,
    });

    res.json({
      totalSaleAmount: totalSaleAmount[0]?.total || 0,
      totalSoldItems,
      totalNotSoldItems,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getStats;