const mongoose = require('mongoose')
const { Schema } = mongoose;


const partnerSchema = Schema({
    approved: {
        type: Boolean,
        default: false
    },
    storeName: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    numberOfBranches: {
        type: Number,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    webSite: {
        type: String,
        required: true,
        trim: true
    },
    storeAddresses: [
        {
            bracnchNumber: {
                type: Number,
                unique: true,
                required: true,
                trim: true
            },
            branchLocation: {
                type: String,
                unique: true,
                required: true,
                trim: true
            },
            zipCode: {
                type: Number,
                unique: true,
                required: true,
                trim: true
            }
        }
    ],
    contactRole: {
        type: String,
        enum: ["Owner", "Co-owner", "Manager", "Employee"],
        required: true
    }
})

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
