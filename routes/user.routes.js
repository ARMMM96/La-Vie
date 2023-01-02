const router = require("express").Router()

const User = require("../app/controllers/user.contoller")

// Sign Up account
router.post("/signup", (req, res) => {
    res.send("Singup Route")
})

// Login
router.post("/login", (req, res) => {
    res.send("Login Route")
})

// Logout
router.post("/logout", (req, res) => {
    res.send("Logout Route")
})

// Forgot Password
router.post("/resetPassword", (req, res) => {
    res.send("Forgot Password Route")
})

// My Profile 
router.get("/single/:id", (req, res) => {
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