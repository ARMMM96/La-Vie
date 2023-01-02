const mongoose = require("mongoose")
const colors = require('colors');

const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.DBURL)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }

}
module.exports = connectDB
