const router = require("express").Router()
const User = require("../app/controllers/user.contoller")
const { authentication } = require("../app/middlewares/authentication.middleware")
const { authorization } = require("../app/middlewares/authorization.middleware")
const { loginRateLimiter } = require("../app/middlewares/loginRateLimiter.middleware")
const { signUpRateLimiter } = require("../app/middlewares/singUpRateLimiter.middleware")
const { updateRateLimiter } = require("../app/middlewares/updateRateLimiter.middleware")


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
router.get("/me", [authentication, authorization], User.myProfile)


// Update My profile 
router.patch("/update/", [authentication, authorization, updateRateLimiter], User.updateProfile)

// Image Upload
router.patch("/profilePicture", [authentication, authorization, updateRateLimiter], User.uploadImage)

// Delete user 
router.delete("/delete", [authentication, authorization], User.deleteAccount)


module.exports = router