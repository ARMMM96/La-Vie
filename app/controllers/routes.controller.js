const routesModel = require("../../database/models/routes.model")
const resHelper = require("../helpers/resHelper")

class Routes {

    static create = async (req, res) => {
        try {
            const routesData = new routesModel(req.body)
            await routesData.save()
            resHelper.resHandler(res, 200, true, routesData, "Rule added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }


}

module.exports = Routes