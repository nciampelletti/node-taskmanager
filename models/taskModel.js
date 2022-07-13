const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    minlength: [3, "can not be less than 3"],
    maxlength: [20, "can not be more than 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model("Task", TaskSchema)
