const router = require('express').Router()
const {addTodo, deleteTodo, updateTodo, tasks} = require("../controller/todos")

router.route("/tasks").get(tasks);
router.route("/addtodo").post(addTodo);
router.route("/deletetodo/:id").delete(deleteTodo);
router.route("/updatetodo/:id").put(updateTodo);

module.exports = router;