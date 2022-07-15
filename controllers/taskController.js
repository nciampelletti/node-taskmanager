const Task = require("../models/taskModel")
const asyncWrapper = require("../middlewear/async")
const { CustomErrorAPI, createCustomError } = require("../errors/customErrors")

exports.createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)

  res.status(201).json({ task })
})

exports.getTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find()

  res.status(200).json({ tasks })
})

exports.getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOne({ _id: req.params.id })

  if (!task) {
    return next(createCustomError("Not found", 404))
  }

  res.status(200).json({ task })
})

exports.updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomError(`id: ${taskId} has not been found`, 404))
  }

  res.status(200).json({ task })
})

exports.deleteTask = asyncWrapper(async (req, res) => {
  const TaskId = req.params.id
  const task = await Task.findOneAndDelete({ _id: TaskId })

  if (!task) {
    return next(createCustomError(`id: ${TaskId} has not been found`, 404))
  }

  res.status(200).json({ task })
})
