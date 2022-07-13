const Task = require("../models/taskModel")

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)

    res.status(201).json({
      status: "success",
      data: { task },
    })
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    })
  }
}

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find()

    res.status(200).json({
      status: "success",
      data: { tasks },
    })
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    })
  }
}

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: `id: ${req.params.id} has not been found`,
      })
    }

    res.status(200).json({
      status: "success",
      data: { task },
    })
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    })
  }
}

exports.createTaskPostman = async (req, res) => {
  res.send("create Task Postman")
}

exports.updateTask = async (req, res) => {
  try {
    const TaskId = req.params.id

    const task = await Task.findOneAndUpdate({ _id: TaskId }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: `id: ${TaskId} has not been found`,
      })
    }

    res.status(200).json({
      status: "success",
      data: task,
    })
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    })
  }
}

exports.deleteTask = async (req, res) => {
  try {
    const TaskId = req.params.id
    const task = await Task.findOneAndDelete({ _id: TaskId })

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: `id: ${TaskId} has not been found`,
      })
    }

    res.status(200).json({
      status: "success",
      data: null,
    })
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err,
    })
  }
}
