
const userModel = require("../../database/models/user.model")
const resHelper = require("../helpers/resHelper")

class User {
    static signUp = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            resHelper.resHandler(res, 200, true, userData, "user added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static login = async (req, res) => {
        try {
            const userData = await userModel.loginUser(req.body.email, req.body.password)
            const token = await userData.generateToken()
            resHelper.resHandler(res, 200, true, { user: userData, token }, "user added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static logOut = async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(
                t => t.token != req.token
            )
            await req.user.save()
            resHelper.resHandler(res, 200, true, null, "logged out")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}








module.exports = User