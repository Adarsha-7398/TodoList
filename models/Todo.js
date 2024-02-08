const mongoose = require("mongoose")

const TodoData = new mongoose.Schema({
    todo:{
        require: true,
        type: String
    }
})


module.exports = new mongoose.model("Todo", TodoData)