const router = require("express").Router()
const Rolse = require("../app/controllers/roles.controller")
const Roles = require("../database/models/roles.model")



router.post("/create", Rolse.create)

router.patch("/update", Rolse.update)


router.get("/get", Rolse.singleRole)

router.get("/all", Rolse.getRoles)

router.delete("/delete", Rolse.delete)


module.exports = router
