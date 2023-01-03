
const userModel = require("../../database/models/user.model")
const resHelper = require("../helpers/resHelper")

class User {
    static signUp = async (req, res) => {
        try {
            const userData = new userModel(req.body)
            await userData.save()
            myHelper.resHandler(res, 200, true, userData, "user added successfully")
        }
        catch (e) {
            myHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}








module.exports = User