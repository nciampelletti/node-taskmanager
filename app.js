const express = require("express")
const app = express()
const taskRouter = require("./routes/taskRoute")

//routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App")
})

app.use("/task/", taskRouter)

const port = 3000

app.listen(port, () => {
  console.log("started")
})
