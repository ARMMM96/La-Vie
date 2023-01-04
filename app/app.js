const express = require("express")
const cors = require("cors")
const app = express()
const connectDB = require('../database/connection')

app.use(cors())
connectDB();
app.use(express.json())


const userRoutes = require("../routes/user.routes")
const rolesRoutes = require("../routes/roles.routes")
app.use("/api/user/", userRoutes)
app.use("/api/roles/", rolesRoutes)

app.all("*", (req, res) => {
    res.status(404).send({
        apisStatus: false,
        message: "Invalid URL",
        data: {}
    })
})

module.exports = app