const mongoose = require('mongoose')
const validator = require("validator")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { Schema } = mongoose;

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
    password: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            const isValidpassword = validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1, minUppercase: 1,
                minNumbers: 1, minSymbols: 1,
                returnScore: false,
            });
            if (!isValidpassword) {
                throw new Error("invalid password format")
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
                addrType: { type: String, require: true },
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
        token: { type: String, required: true }
    }]
})


userSchema.pre("save", async function () {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 8)
    }
})


userSchema.statics.loginUser = async (email, password) => {
    const userData = await User.findOne({ email })
    if (!userData) throw new Error("invalid email")
    const validatePassword = await bcryptjs.compare(password, userData.password)
    if (!validatePassword) throw new Error("invalid password")
    return userData
}



userSchema.methods.generateToken = async function () {
    const userData = this
    console.log("test ", process.env.tokenPass)
    const token = jwt.sign({ _id: userData._id }, process.env.tokenPass)
    userData.tokens = userData.tokens.concat({ token })
    await userData.save()
    return token
}



const User = mongoose.model("User", userSchema)
module.exports = User