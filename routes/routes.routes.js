const router = require("express").Router()
const Routes = require("../app/controllers/routes.controller")


router.post("/create", Routes.create)

router.patch("/update", Routes.update)


router.get("/get", Routes.singleRoute)

router.get("/all", Routes.getRoutes)

router.delete("/delete", Routes.delete)


module.exports = router
