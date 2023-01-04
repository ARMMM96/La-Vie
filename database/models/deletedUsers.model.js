const { Schema } = mongoose;
const mongoose = require('mongoose')


const deletedUsersSchema = Schema([

])

const DeletedUsers = mongoose.model("DeletedUsers", deletedUsersSchema)
module.exports = DeletedUsers