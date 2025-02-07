import getBarChartData from "./barChartController.js";
import getPieChartData from "./pieChartController.js";
import getStats from "./statsController.js";


const getCombinedData = async (req, res) => {
  const { month } = req.query;

  try {
    const stats = await getStats(req, res);
    const barChart = await getBarChartData(req, res);
    const pieChart = await getPieChartData(req, res);

    res.json({ stats, barChart, pieChart });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default getCombinedData;