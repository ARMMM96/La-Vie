
const partnershipModel = require("../../database/models/partner.model")
const userModel = require("../../database/models/user.model")
const rolesModel = require("../../database/models/roles.model")
const resHelper = require("../helpers/resHelper")

class Partnership {
    static requiest = async (req, res) => {
        try {
            const partnershipData = new partnershipModel(req.body)
            await partnershipData.save()
            try {
                const linkPartnership = await userModel.findByIdAndUpdate({ _id: req.user._id }, { partnerShip: partnershipData._id }, { new: true })
                resHelper.resHandler(res, 200, true, partnershipData, "Partnership request sent successfully")
            } catch (e) {
                resHelper.resHandler(res, 500, false, e, e.message)
            }

        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static approve = async (req, res) => {
        try {
            const getPartnerRuleId = await rolesModel.findOne({ roleTitle: "partner" });
            const updateUserRole = await userModel.findByIdAndUpdate({ _id: req.body.userId }, { role: getPartnerRuleId._id }, { new: true })
            const partnershipData = await partnershipModel.findOneAndUpdate({ _id: req.body.pratnershipRequest }, { approved: true }, { new: true })
            resHelper.resHandler(res, 200, true, partnershipData, "Partnership approved successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static cancel = async (req, res) => {
        try {
            const getCustomerRuleId = await rolesModel.findOne({ roleTitle: "customer" });
            const updateUserRole = await userModel.findByIdAndUpdate({ _id: req.body.userId }, { role: getCustomerRuleId._id }, { new: true })
            const partnershipData = await partnershipModel.findOneAndUpdate({ _id: req.body.pratnershipRequest }, { approved: false }, { new: true })
            resHelper.resHandler(res, 200, true, partnershipData, "Partnership canceled successfully")
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static getStatus = async (req, res) => {
        try {
            const partnershipData = await partnershipModel.findOne({ _id: req.body.pratnershipId })
            if (partnershipData) {
                if (partnershipData.approved) {
                    resHelper.resHandler(res, 200, true, partnershipData.approved, "Partnership Status is approved")
                } else {
                    resHelper.resHandler(res, 200, true, partnershipData.approved, "Partnership Status no approved")
                }
            } else {

                resHelper.resHandler(res, 404, true, partnershipData, "Partnership not found")
            }
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
    static update = async (req, res) => {
        try {
            // Preventing Unauthorized approvement
            req.body.approved = false;
            const partnershipData = await partnershipModel.findOneAndUpdate({ _id: req.body.pratnershipId }, req.body, { new: true })
            if (!partnershipData) {
                resHelper.resHandler(res, 404, true, partnershipData, "Not found")
            } else {
                resHelper.resHandler(res, 200, true, partnershipData, "Data updated pending for approval")
            }
        }
        catch (e) {
            resHelper.resHandler(res, 500, false, e, e.message)
        }
    }
}

module.exports = Partnership