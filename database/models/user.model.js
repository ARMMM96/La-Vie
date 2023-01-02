const mongoose = require('mongoose')
const validator = require("validator")
const { Schema } = Mongoose;

const userSchema = Schema({
    fristName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("invalid email format")
            }
        }
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
        validate(value) {
            if (!validator.isMobilePhone(value, "ar-EG"))
                throw new Error("invalid number")
        }
    },
    addresses: [
        {
            address: {
                addrType: { type: String , require: true},
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
    }

})


const User = mongoose.model("User", userSchema)
module.exports = User