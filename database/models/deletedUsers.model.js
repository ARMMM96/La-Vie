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
        },
        password: {
            type: String,

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
                address: {
                    addrType: { type: String },
                    addrDetails: { type: String }
                }
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
            token: { type: String}
        }]
    }
})

const DeletedUsers = mongoose.model("DeletedUsers", deletedUsersSchema)
module.exports = DeletedUsers