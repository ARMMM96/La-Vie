const rolesModel = require("../../database/models/roles.model")
const resHelper = require("../helpers/resHelper")

class Rules {

    static create = async (req, res) => {
        try {
            const rolesData = new rolesModel(req.body)
            await rolesData.save()
            resHelper.resHandler(res, 200, true, userData, "Rule added successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }


}

module.exports = Rules