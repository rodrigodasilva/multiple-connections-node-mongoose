const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = { ReportSchema }
