
const userModel = require("../../database/models/user.model")
const deltedUsers = require("../../database/models/deletedUsers.model")
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

    static myProfile = async (req, res) => {
        try {
            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message: "data fetched"
            })
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    static updateProfile = async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(req.user._id, req.body, { new: true })
            resHelper.resHandler(res, 200, true, user, "updated")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    static deleteAccount = async (req, res) => {
        try {
            const deletedUser = new deltedUsers({ deletedUser: req.user})
            await deletedUser.save()
            const user = await userModel.findByIdAndRemove(req.user._id)
            resHelper.resHandler(res, 200, true, user, "Deleted")
        } catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)

        }
    }
}








module.exports = User