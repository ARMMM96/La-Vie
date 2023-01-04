const routesModel = require("../../database/models/routes.model")
const resHelper = require("../helpers/resHelper")

const authorization = async (req, res, next) => {
    const currentUrl = req.originalUrl
    try {
        const routes = await routesModel.findOne({ url: currentUrl })
        const findRule = routes.roles.find(role => {
            return role.toString() == req.user.role.toString()
        })
        if (findRule.toString()) {
            next()
        } else {
            resHelper.resHandler(res, 401, false, e.message, "Unauthorized request")

        }
    }
    catch (e) {
        resHelper.resHandler(res, 500, false, e.message, "Unauthorized request")
    }
}
module.exports = { authorization }