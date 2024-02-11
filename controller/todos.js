const Todos = require("../models/Todo")

// let list = []

const addTodo = async (req, res)=>{
    const {task} = req.body;

    try{
        const newTodo = new Todos({
            task: req.body,
            completed: false
        })
        await newTodo.save();
        res.status(200).json(newTodo)
    }catch(err){
        res.status(500).json(({err: "internal server error"}))
    }
    // list.push(req.body)
    // res.json(list)
}

const getTodo = (req, res)=>{
    res.json(list)
}

const deleteTodo = (req, res)=>{
    const listid = req.params.index
    list.splice(listid, 1);
    res.json(list)
}

const updateTodo = (req, res)=>{
    console.log("na")
}

// const getTodoList = async ()=>{
//     try{
//         const todo = await Todos.find()

//     }catch(err){
//         throw new Error(err)
//     }
// }

module.exports = {addTodo, getTodo, deleteTodo, updateTodo}