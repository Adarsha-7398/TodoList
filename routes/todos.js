const router = require('express').Router()
const {addTodo, getTodo, deleteTodo, updateTodo} = require("../controller/todos")

router.route("/tasks").get(getTodo);
router.route("/addtodo").post(addTodo);
router.route("/deletetodo/:index").delete(deleteTodo);
router.route("/updatetodo").delete(updateTodo);

module.exports = router;