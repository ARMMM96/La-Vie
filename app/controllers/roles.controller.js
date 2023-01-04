const rolesModel = require("../../database/models/roles.model")
const resHelper = require("../helpers/resHelper")

class Rolse {

    static create = async (req, res) => {
        try {
            const rolesData = new rolesModel(req.body)
            await rolesData.save()
            resHelper.resHandler(res, 200, true, rolesData, "Rule added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static update = async (req, res) => {
        try {
            const rolesData = await rolesModel.findOneAndUpdate({ _id: req.body.id }, { roleTitle: req.body.roleTitle }, { new: true })
            if (!rolesData) {
                resHelper.resHandler(res, 404, false, null, "Rule Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, rolesData, "Rule Updated successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static delete = async (req, res) => {
        try {
            const rolesData = await rolesModel.findOneAndDelete({ _id: req.body.id })
            if (!rolesData) {
                resHelper.resHandler(res, 404, false, null, "Rule Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, rolesData, "Rule Deleted successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static singleRole = async (req, res) => {
        try {
            const rolesData = await rolesModel.findOne({ _id: req.body.id })
            if (!rolesData) {
                resHelper.resHandler(res, 404, false, null, "Rule Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, rolesData, "Rule successfully found")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getRoles = async (req, res) => {
        try {
            const rolesData = await rolesModel.find()
            if (!rolesData) {
                resHelper.resHandler(res, 404, false, null, "No Rules created Yet")
            } else {
                resHelper.resHandler(res, 200, true, rolesData, "Rule successfully found")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }



}

module.exports = Rolse