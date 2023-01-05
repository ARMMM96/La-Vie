
const userModel = require("../../database/models/user.model")
const deltedUsers = require("../../database/models/deletedUsers.model")
const resHelper = require("../helpers/resHelper")
const upload = require('../middlewares/imageUpload.middleware')
const multer = require("multer")

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
            resHelper.resHandler(res, 200, true, req.user, "user successfully found")

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    static updateProfile = async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate(req.user._id, req.body, { new: true })
            console.log(req.body)
            resHelper.resHandler(res, 200, true, user, "updated")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }

    }

    static deleteAccount = async (req, res) => {
        try {
            const deletedUser = new deltedUsers({ deletedUser: req.user })
            await deletedUser.save()
            const user = await userModel.findByIdAndRemove(req.user._id)
            resHelper.resHandler(res, 200, true, user, "Deleted")
        } catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)

        }
    }

    static uploadImage = async (req, res) => {
        try {
            const image = upload.single('img')
            image(req, res, function (err) {
                if (err instanceof multer.MulterError) {
                    return res.send({ err: "invalid upload" })
                } else if (err) {
                    return res.send({ err: "invalid upload 1", err })
                }
                return res.send(req.file)
            })
        }
        catch (err) {
            res.send(err.message)
        }
    }
}





module.exports = User