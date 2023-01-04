const router = require("express").Router()
const User = require("../app/controllers/user.contoller")
const { authentication } = require("../app/middlewares/authentication.middleware")
const { loginRateLimiter } = require("../app/middlewares/loginRateLimiter.middleware")
const { signUpRateLimiter } = require("../app/middlewares/singUpRateLimiter.middleware")


// Sign Up account
router.post("/signup", signUpRateLimiter, User.signUp)

// Login
router.post("/login", loginRateLimiter, User.login)

// Logout
router.post("/logout", authentication, User.logOut)

// Forgot Password
router.post("/resetPassword", (req, res) => {
    res.send("Forgot Password Route")
})

// My Profile 
router.get("/single/:id", authentication, (req, res) => {
    res.send("My profile Route")
})


// Update My profile 
router.patch("/update/:id", (req, res) => {
    res.send("Update My profile Route")
})

// Delete user 
router.delete("/delete/:id", (req, res) => {
    res.send("Delete My profile Route")
})


module.exports = router