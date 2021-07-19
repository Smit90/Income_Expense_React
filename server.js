const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const transactions = require("./routes/transaction");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const app = express();
connectDB();

app.use(express.json());
app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
