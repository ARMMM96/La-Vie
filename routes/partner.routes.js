const router = require("express").Router()
const { authentication } = require("../app/middlewares/authentication.middleware")
const { authorization } = require("../app/middlewares/authorization.middleware")

// Requiest partnership 
router.post("/requiest", [authentication, authorization], (req, res) => {
    req.send("requested")
})
// Approve partnership 
router.patch("/approve", [authentication, authorization], (req, res) => {
    req.send("partnership approved")
})
// Cancel partnership 
router.patch("/cancel", [authentication, authorization], (req, res) => {
    req.send("partnership canceled")
})
// Get partnership status 
router.get("/status", [authentication, authorization], (req, res) => {
    req.send("partnership status ")
})



module.exports = router