const routesModel = require("../../database/models/routes.model")
const resHelper = require("../helpers/resHelper")

class Routes {

    static create = async (req, res) => {
        try {
            const routesData = new routesModel(req.body)
            await routesData.save()
            resHelper.resHandler(res, 200, true, routesData, "Route added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static update = async (req, res) => {
        try {
            const routesData = await routesModel.findOneAndUpdate({ _id: req.body.id }, { roleTitle: req.body.roleTitle }, { new: true })
            if (!routesData) {
                resHelper.resHandler(res, 404, false, null, "Rule Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, routesData, "Route Updated successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

}

module.exports = Routes