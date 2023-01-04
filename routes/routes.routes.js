const router = require("express").Router()
const Routes = require("../app/controllers/routes.controller")


router.post("/create", Routes.create)

router.patch("/update", Routes.update)


router.get("/get", (req, res) => {
    res.send("get single")
})

router.get("/all", (req, res) => {
    res.send("get all")
})

router.delete("/delete", Routes.delete)


module.exports = router
