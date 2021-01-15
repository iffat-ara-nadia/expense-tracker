const Transaction = require("../models/transactionModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.send(transactions);
});

router.get("/:id", async (req, res) => {
  const transaction = await Transaction.findById(req.params.id);

  if (!transaction)
    return res
      .status(404)
      .send("The transaction with given ID was not found....");

  res.send(transaction);
});

router.post("/", async (req, res) => {
  let transaction = new Transaction({
    text: req.body.text,
    amount: req.body.amount
  });

  await transaction.save();
  res.send(transaction);
});

router.delete("/:id", async (req, res) => {
  const transaction = await Transaction.findByIdAndRemove(req.params.id);
  if (!transaction)
    return res
      .status(404)
      .send("The Transaction with the Given ID was not found...");

  res.send(transaction);
});

module.exports = router; //My error: didn't type this line
