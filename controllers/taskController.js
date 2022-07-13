const Task = require("../models/taskModel")

exports.createTask = async (req, res) => {
  const task = await Task.create({
    name: req.body.name,
    completed: req.body.completed,
  })
  res.status(201).json({ task })
}

exports.getTasks = async (req, res) => {
  res.send(" get Tasks")
}

exports.getTask = async (req, res) => {
  res.send("get Task")
}

exports.createTaskPostman = async (req, res) => {
  res.send("create Task Postman")
}

exports.updateTask = async (req, res) => {
  res.send("update Task")
}

exports.deleteTask = async (req, res) => {
  res.send("delete Task")
}
