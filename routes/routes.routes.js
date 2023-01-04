const router = require("express").Router()
const Routes = require("../app/controllers/routes.controller")


router.post("/create", (req, res) => {
    res.send("create")
})

router.patch("/update", (req, res) => {
    res.send("update")
})


router.get("/get", (req, res) => {
    res.send("get single")
})

router.get("/all", (req, res) => {
    res.send("get all")
})

router.delete("/delete", (req, res) => {
    res.send("delete")
})


module.exports = router
