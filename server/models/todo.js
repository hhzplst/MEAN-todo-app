var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
  task: String
});

module.exports = mongoose.model("todo", todoSchema);