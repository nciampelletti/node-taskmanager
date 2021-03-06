const express = require("express")
const router = express.Router()
const {
  getTasks,
  createTask,
  createTaskPostman,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/taskController")

router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
