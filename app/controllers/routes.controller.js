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
            const routesData = await routesModel.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true })
            if (!routesData) {
                resHelper.resHandler(res, 404, false, null, "Route Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, routesData, "Route Updated successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static delete = async (req, res) => {
        try {
            const routesData = await routesModel.findOneAndDelete({ _id: req.body.id })
            if (!routesData) {
                resHelper.resHandler(res, 404, false, null, "Route Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, routesData, "Route Deleted successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }


    static singleRoute = async (req, res) => {
        try {
            const routesData = await routesModel.findOne({ _id: req.body.id })
            if (!routesData) {
                resHelper.resHandler(res, 404, false, null, "Route Is not exist")
            } else {
                resHelper.resHandler(res, 200, true, routesData, "Route found successfully")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }

    static getRoutes = async (req, res) => {
        try {
            const routesData = await routesModel.find()
            if (!routesData) {
                resHelper.resHandler(res, 404, false, null, "No Routes created Yet")
            } else {
                resHelper.resHandler(res, 200, true, routesData, "Routes successfully found")
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }


}

module.exports = Routes