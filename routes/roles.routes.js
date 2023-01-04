const router = require("express").Router()
const Rules = require("../app/controllers/roles.controller")



router.post("/create", Rules.create)

router.patch("/update", Rules.update)


router.get("/get", (req, res) => {
    res.send("rule data")
})
router.delete("/delete", (req, res) => {
    res.send("rule deleted")
})


module.exports = router
