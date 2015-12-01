var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo-db");

mongoose.set("debug", true);

module.exports.Todo = require("./todo");