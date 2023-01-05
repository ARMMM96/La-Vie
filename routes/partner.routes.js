const router = require("express").Router()
const Partnership = require('../app/controllers/partnership.controller')
const { authentication } = require("../app/middlewares/authentication.middleware")
const { authorization } = require("../app/middlewares/authorization.middleware")
const { updateRateLimiter } = require("../app/middlewares/updateRateLimiter.middleware")

// Requiest partnership 
router.post("/requiest", [authentication, authorization], Partnership.requiest)
// Approve partnership 
router.patch("/approve", [authentication, authorization], Partnership.approve)
// Cancel partnership 
router.patch("/cancel", [authentication, authorization], Partnership.cancel)

// Get Update my Pratnership data
router.patch("/update", [authentication, authorization, updateRateLimiter], Partnership.update)



// Get partnership status 
router.get("/status", [authentication, authorization], Partnership.getStatus)



module.exports = router