const router = require("express").Router()



router.post("/create", (req, res) => {
    res.send("rule created")
})
router.patch("/updte", (req, res) => {
    res.send("rule updated")

})
router.get("/get", (req, res) => {
    res.send("rule data")
})
router.delete("/delete", (req, res) => {
    res.send("rule deleted")
})


module.exports = router
