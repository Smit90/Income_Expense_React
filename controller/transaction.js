const Transaction = require("../models/Transaction");

exports.getTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

exports.addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: message,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      res.status(400).json({
        success: false,
        error: "No Transaction Found",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};
