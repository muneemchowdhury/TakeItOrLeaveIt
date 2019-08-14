const router = require("express").Router();

const recycleRoutes = require("./recycle");
const itemRoutes = require("./item")

//  routes
router.use("/recycle", recycleRoutes);
router.use("/item", itemRoutes)

module.exports = router;