const FinancialRecord = require("../models/FinancialRecord");

// ➕ CREATE RECORD
exports.createRecord = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    const record = await FinancialRecord.create({
      user: req.user.id,
      amount,
      type,
      category,
      date,
      notes,
    });

    res.status(201).json({
      message: "Record added successfully",
      record,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  if (!amount || !type || !category) {
  return res.status(400).json({ message: "All fields are required" });
}
};

// 📥 GET ALL RECORDS (for logged-in user)
exports.getRecords = async (req, res) => {
  try {
    const records = await FinancialRecord.find({
      user: req.user.id,
    }).sort({ date: -1 });

    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ❌ DELETE RECORD
exports.deleteRecord = async (req, res) => {
  try {
    await FinancialRecord.findByIdAndDelete(req.params.id);

    res.json({ message: "Record deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// 📊 DASHBOARD (Income, Expense, Balance)
exports.getDashboard = async (req, res) => {
  try {
    const records = await FinancialRecord.find({
      user: req.user.id,
    });

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((record) => {
      if (record.type === "income") {
        totalIncome += record.amount;
      } else {
        totalExpense += record.amount;
      }
    });

    

    const balance = totalIncome - totalExpense;

    res.json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  const { startDate, endDate } = req.query;

let filter = { user: req.user.id };

if (startDate && endDate) {
  filter.createdAt = {
    $gte: new Date(startDate),
    $lte: new Date(endDate),
  };
}

const records = await FinancialRecord.find(filter);
};