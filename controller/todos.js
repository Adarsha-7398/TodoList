const Todo = require("../models/Todo");

// let list = []

const addTodo = async (req, res) => {
  // const {task} = req.body;

  // const tasks = new Todos({task: task})
  // await task.save()
  // res.json(task)
  // console.log(task)

  const { task } = req.body;

  try {
    const newTodo = new Todo({
      todo: task,
      // completed: false
    });
    newTodo.save().then((status) => {
      console.log("status", status);

    }).catch(err=>{
        console.log(err)
    });

    res.status(200).json(newTodo);
    console.log("getting data", newTodo);
  } catch (err) {
    res.status(500).json({ err: "internal server error"});
    console.log(err)
  }
  // list.push(req.body)
  // res.json(list)
};

const tasks = async (req, res) => {
  // res.json(task)
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    throw new Error(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: "Internal server error" });
    console.log(err);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const {task} = req.body;
    const todos = await Todo.findByIdAndUpdate(
      id,
      { todo: task }
    );
    res.json(todos);
  } catch (err) {
    res.status(500).json({ err: "Internal server error" });
  }
};

module.exports = { addTodo, tasks, deleteTodo, updateTodo };
