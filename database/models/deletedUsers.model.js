const mongoose = require('mongoose')
const { Schema } = mongoose;


const deletedUsersSchema = Schema({
    deletedUser: {
        _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        firstName: {
            type: String,

        },
        lastName: {
            type: String,

        },
        email: {
            type: String,
            trim: true,
            lowercase: true
        },
        password: {
            type: String,
            trim: true,
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            trim: true,
            lowercase: true,
            enum: ["male", "female"]
        },
        phoneNumber: {
            type: String,
        },
        addresses: [
            {
                addrType: { type: String },
                addrDetails: { type: String }
            }
        ],
        bookMarks: [
            {
                url: String,
                name: String,
            }
        ],
        image: {
            type: String,
            trim: true,
        },
        tokens: [{
            token: { type: String, required: true }
        }],
        role: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Roles",
            default: "63b5fb423a9742d3119d429d",
        },
        userLevel: {
            type: String,
            trim: true,
            lowercase: true,
            enum: ["beginner", "advanced", "professional"],
            default: "beginner"
        },
        rewards: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rewards",
        }],
        partnerShip: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rewards",
        }
    }
})

const DeletedUsers = mongoose.model("DeletedUsers", deletedUsersSchema)
module.exports = DeletedUsers