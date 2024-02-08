const router = require('express').Router()
const Todo = require('../models/Todo')

router.post("/add/todo", (req, res)=>{
    const {todo} = req.body;
    const newTodo = new Todo({todo})
    newTodo.save()
    .then(()=>{
        console.log("Successfully added")
        res.redirect(("/"))
    }).catch(
        (err)=>{console.log(err)}
    )
    console.log(todo)
})

module.exports = router