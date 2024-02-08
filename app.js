const mongoose = require("mongoose")
const express = require("express")
const todo = require('./routes/todo')

const app = express()
const port = 3000

mongoose.connect("mongodb://127.0.0.1:27017/Todos")

//Middlewares 

app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine", "ejs")

// Routes

app.use(require("./routes/index"))
app.use(require("./routes/todo"))

// Server configuration

app.listen(port, ()=>{
    console.log("App listening on port", port)
})