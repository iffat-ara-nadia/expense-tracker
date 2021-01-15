const mongoose = require("mongoose");
const cors = require("cors");
const transactionsRoute = require("./routes/transactionsRoute");

const express = require("express");

const app = express();

mongoose
  .connect("mongodb://localhost/expense-tracker")
  .then(() => console.log("MongoDB connection has establied successfully..."))
  .catch(err => console.error("Couldn't connect to MongoDb...."));

app.use(express.json());
app.use(cors());

app.use("/api/transactions", transactionsRoute);

const PORT = process.env.PORT || 4800;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}....`);
});
