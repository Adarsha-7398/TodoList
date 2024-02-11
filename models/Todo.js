const mongoose = require("mongoose")

const TodoData = new mongoose.Schema({
    todo:{
        completed: Boolean,
        task: String
    }
})


const Todos = mongoose.model("Todo", TodoData)
module.exports = Todos;