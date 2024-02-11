// const mongoose = require("mongoose")
// const express = require("express")
// const todo = require('./routes/todo')

// const app = express()
// const port = 3000

// mongoose.connect("mongodb://127.0.0.1:27017/Todos")

// //Middlewares 

// app.use(express.urlencoded({extended: true}))
// app.use(express.static("public"))

// app.set("view engine", "ejs")

// // Routes

// app.use(require("./routes/index"))
// app.use(require("./routes/todo"))

// // Server configuration

// app.listen(port, ()=>{
//     console.log("App listening on port", port)
// })



const mongoose = require("mongoose")
const app = require('express')()
const port = 3000
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const methodOverride = require('method-override')
app.use(methodOverride())

const todos = require("./routes/todos")

app.use("/", todos)

app.listen(port, ()=>{console.log("App listening on port: 3000")

      connectDb()
})

// mongoose.connect("mongodb://127.0.0.1:27017/Todos")

// const mongodb = mongoose.connection;

async function connectDb(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Todos")
        console.log("db connected")
    }catch(err){
        console.log(err)
    }
}