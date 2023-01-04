const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
    roleTitle: { type: String, unique: true, required: true, trim: true },
});

const Roles = mongoose.model("Roles", rolesSchema);

module.exports = Roles;
