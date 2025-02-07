import express from "express";
import getTransactions from "../controllers/transactionController.js";
import getBarChartData from "../controllers/barChartController.js";
import getPieChartData from "../controllers/pieChartController.js";
import getCombinedData from "../controllers/combinedController.js";
import getStats from "../controllers/statsController.js";

const router = express.Router();

router.get("/transactions", getTransactions);
router.get("/stats", getStats);
router.get("/bar-chart", getBarChartData);
router.get("/pie-chart", getPieChartData);
router.get("/combined", getCombinedData);

export default router;
