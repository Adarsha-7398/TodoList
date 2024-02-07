const mongoose = require("mongoose")

const userData = mongoose.Schema({
    name:{
        require: true,
        type: String
    },
    password:{
        type: Number,
        require: true
    }
})

const User = mongoose.model("User", userData)

module.exports = User