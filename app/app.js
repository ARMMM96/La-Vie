const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require('../database/connection')

app.use(cors())
connectDB();
app.use(express.json())


const userRoutes = require("../routes/user.routes")
app.use("/api/user/",  userRoutes)



module.exports = app