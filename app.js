const express = require("express")
const app = express()
const taskRouter = require("./routes/taskRoute")
require("dotenv").config()
const { notFound } = require("./middlewear/notFound")
const errorHandler = require("./middlewear/errorHandler")

//connect to DB
const connectDB = require("./db/connect")

//middlerware to have data in req.body
app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1/tasks", taskRouter)
app.use(notFound)
//error handling
app.use(errorHandler)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)

    app.listen(port, () => {
      console.log("started")
    })
  } catch (error) {
    console.log("error")
  }
}

start()
