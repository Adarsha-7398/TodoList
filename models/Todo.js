const mongoose = require("mongoose");

const TodoData = new mongoose.Schema(
  {
    todo: {type: String},
  }
);

const Todo = mongoose.model("Todo", TodoData);
module.exports = Todo;
