
const partnershipModel = require("../../database/models/partner.model")
const userModel = require("../../database/models/user.model")
const resHelper = require("../helpers/resHelper")

class Partnership {
    static requiest = async (req, res) => {
        try {
            const partnershipData = new partnershipModel(req.body)
            await partnershipData.save()
            const linkPartnership = await userModel.findByIdAndUpdate({ _id: req.user._id }, { partnerShip: partnershipData._id }, { new: true })
            resHelper.resHandler(res, 200, true, partnershipData, "Partnership request sent successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Partnership