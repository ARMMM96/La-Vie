const router = require("express").Router()
const Partnership = require('../app/controllers/partnership.controller')
const { authentication } = require("../app/middlewares/authentication.middleware")
const { authorization } = require("../app/middlewares/authorization.middleware")

// Requiest partnership 
router.post("/requiest", [authentication, authorization], Partnership.requiest)
// Approve partnership 
router.patch("/approve", [authentication, authorization], Partnership.approve)
// Cancel partnership 
router.patch("/cancel", [authentication, authorization], (req, res) => {
    res.send("partnership canceled")
})
// Get partnership status 
router.get("/status", [authentication, authorization], (req, res) => {
    res.send("partnership status ")
})



module.exports = router