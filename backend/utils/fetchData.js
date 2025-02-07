import Transaction from "../models/schema.js";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://s3.amazonaws.com/roxiler.com/product_transaction.json"
    );
    await Transaction.deleteMany({});
    await Transaction.insertMany(response.data);
    console.log("Database initialized with seed data");
  } catch (error) {
    console.error("Error fetching data:", err.message);
  }
};
export default fetchData;
